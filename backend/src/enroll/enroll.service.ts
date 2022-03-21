import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { UpdateEnrollStatusDto } from './dto/update-enroll-status.dto';
import { EnrollDto } from './dto/enroll.dto';
import { CreditService } from 'src/credit/credit.service';
import { CreateCreditHistoryDto } from 'src/credit/dto/create-credit-history.dto';
import { TransactionType } from 'src/constant'
import { UserService } from 'src/user/user.service';

const STATUS_WAITING = 'waiting';
@Injectable()
export class EnrollService {
  constructor(
    @InjectModel('enrolls') private readonly enrollModel: Model<any>,
    @InjectModel('courses') private readonly courseModel: Model<any>,
    private creditService: CreditService,
    private userService: UserService
  ) {}

  async createEnroll(body: CreateEnrollDto) {
    const course = await this.courseModel.findById(body.courseId);
    if (course.status === 'unpublished') {
      throw new BadRequestException('This course is not published yet.');
    }
    const enroll = new this.enrollModel({ ...body, status: STATUS_WAITING });
    // await enroll.save()
    const credit = await this.creditService.changeBalanceByUserId(body.studentId, {amountToChange: -course.price, type: TransactionType.STUDENT_ENROLL_COURSE, courseId: course.id})
    enroll.paymentHistoryId = credit.creditHistoryId
    await enroll.save().catch(function (error) {
      throw new BadRequestException({ ...error, message: 'duplicate columns' });
    })
    return enroll
  }

  async findByCourseId(id: string) {
    if (!mongoose.isValidObjectId(id)) {
      throw new HttpException("This course ID isn't valid", 404);
    }
    const enroll = await this.enrollModel.find({ courseId: id });
    if (!enroll) {
      throw new NotFoundException("This enroll ID doesn't exist");
    }
    return enroll;
  }

  async findWaitingByCourseId(
    courseId: string,
    tutorId: string,
  ): Promise<EnrollDto[]> {
    if (!mongoose.isValidObjectId(courseId)) {
      throw new HttpException("This course ID isn't valid", 404);
    }
    const enroll = await this.enrollModel.find({
      courseId: courseId,
      status: STATUS_WAITING,
    }); // enroll array
    const course = await this.courseModel.findById(courseId);
    if (!course) {
      throw new NotFoundException("Can't find course");
    }
    if (course.tutorId !== tutorId) {
      throw new BadRequestException('This course is not yours');
    }

    const response = [];
    for (let i = 0; i < enroll.length; i++) {
      let e = enroll[i];
      let e2: EnrollDto;
      const student = await this.userService.findById(e.studentId);
      e2 = {
        ...e._doc,
        studentFirstName: student.firstname,
        studentLastName: student.lastname,
        courseName: course.courseName,
      };
      response.push(e2);
    }
    return response;
  }

  async findWaitingByTutorId(tutorId: string): Promise<EnrollDto[]> {
    if (!mongoose.isValidObjectId(tutorId)) {
      throw new HttpException("This tutor ID isn't valid", 404);
    }
    const courses = await this.courseModel.find({ tutorId: tutorId }); // courses array
    let response = []; // every response
    for (let i = 0; i < courses.length; i++) {
      const enrolls = await this.enrollModel.find({
        courseId: courses[i].id,
        status: STATUS_WAITING,
      }); // enrolls array
      response = response.concat(enrolls);
    }

    for (let i = 0; i < response.length; i++) {
      const student = await this.userService.findById(response[i].studentId);
      const course = await this.courseModel.findById(response[i].courseId);
      response[i] = {
        ...response[i]._doc,
        studentName: student.firstname + " " + student.lastname,
        courseName: course.courseName,
        subject: course.subject,
        lesson: course.lesson,
        studentCount: course.students.length,
        capacity: course.capacity,
      };
    }
    return response;
  }

  async updateEnrollStatus(
    enrollId: string,
    body: UpdateEnrollStatusDto,
    tutorId: string,
  ) {
    if (!mongoose.isValidObjectId(enrollId)) {
      throw new HttpException("This enrollment ID isn't valid", 404);
    }
    const enroll = await this.enrollModel.findById(enrollId);
    if (!enroll) {
      throw new NotFoundException("This enroll ID doesn't exist");
    }

    const course = await this.courseModel.findById(enroll.courseId);
    if (!course) {
      throw new NotFoundException("Can't find course");
    }
    if (course.tutorId !== tutorId) {
      throw new BadRequestException('This course is not yours');
    }

    enroll.status = body.status;

    if (body.status === 'approved') {
      course.students.push(enroll.studentId);
      const student = await this.userService.findById(enroll.studentId)

      if (student.coursesLearned.find(e => e === enroll.courseId)) {
        throw new BadRequestException(
          'You have already enrolled in this course.',
        );
      }

      await course.save();
      student.coursesLearned.push(enroll.courseId);

      await this.creditService.changeBalanceByUserId(tutorId, {amountToChange: -await this.creditService.getAmountByPaymentHistoryId(enroll.paymentHistoryId), type: TransactionType.TUTOR_ACCEPT_STUDENT, courseId: enroll.courseId});
      await student.save();

    } else if (body.status === 'rejected') {
      await this.creditService.changeCreditHistoryStatusById(enroll.paymentHistoryId, {status: 'rejected by tutor'});
    }

    enroll.dateTimeUpdated = Date.now();
    return await enroll.save().catch(function (error) {
      throw new BadRequestException({ ...error, message: 'duplicate columns' });
    });
  }

  async cancelEnrollmentById(enrollId: string, userId: string){
    if (!mongoose.isValidObjectId(enrollId)) {
      throw new HttpException("This enrollment ID isn't valid", 404);
    }

    const enroll = await this.enrollModel.findById(enrollId);
    if (!enroll) {
      throw new NotFoundException("This enroll ID doesn't exist");
    }

    if (enroll.studentId !== userId) {
      throw new BadRequestException('This enrollment is not yours');
    }

    if (enroll.status === 'canceled') {
      throw new BadRequestException('This enrollment is already canceled');
    }

    if (enroll.status !== 'waiting') {
      throw new BadRequestException('You can only cancel enroll that is waiting!');
    }

    enroll.status = 'canceled';
    enroll.dateTimeUpdated = Date.now();
    await this.creditService.changeCreditHistoryStatusById(enroll.paymentHistoryId, {status: 'canceled'});
    return await enroll.save();
  }

  async findWaitingByStudentId(studentId: string): Promise<EnrollDto[]> {
    if (!mongoose.isValidObjectId(studentId)) {
      throw new HttpException("This student ID isn't valid", 404);
    }
    const enrolls = await this.enrollModel.find({
      studentId: studentId,
      status: STATUS_WAITING,
    }).sort({dateTimeCreated: -1});

    return enrolls
  }

  async getEnrollByStudentID(studentId: string): Promise<EnrollDto[]> {
    if (!mongoose.isValidObjectId(studentId)) {
      throw new HttpException("This student ID isn't valid", 404);
    }
    const enrolls = await this.enrollModel.find({studentId: studentId}).sort({dateTimeCreated: -1});
    return enrolls
  }
}
