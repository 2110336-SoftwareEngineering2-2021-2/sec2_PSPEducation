import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { UpdateEnrollStatusDto } from './dto/update-enroll-status.dto';

const STATUS_WAITING = 'waiting'
@Injectable()
export class EnrollService {

  constructor(
    @InjectModel('enrolls') private readonly enrollModel: Model<any>,
    @InjectModel('courses') private readonly courseModel: Model<any>,
    @InjectModel('users') private readonly userModel: Model<any>
  ) {}

  async createEnroll(body: CreateEnrollDto){
    const course = await this.courseModel.findById(body.courseId)
    if (course.status === 'unpublished'){
      throw new BadRequestException("This course is not published yet.")
    }
    const enroll = new this.enrollModel({...body, status: STATUS_WAITING})
    return await enroll.save().catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    })
  }

  async findByCourseId(id: string){
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This course ID isn't valid", 404);
    }
    const enroll = await this.enrollModel.find({ courseId: id })
    if (!enroll){
      throw new NotFoundException("This enroll ID doesn't exist");
    }
    return enroll
  }

  async findWaitingByCourseId(courseId: string, tutorId: string){
    if (!mongoose.isValidObjectId(courseId)){
      throw new HttpException("This course ID isn't valid", 404);
    }
    const enroll = await this.enrollModel.find({ courseId: courseId, status: STATUS_WAITING })
    const course = await this.courseModel.findById(courseId)
    if(!course){
      throw new NotFoundException("Can't find course");
    }
    if (course.tutorId !== tutorId){
      throw new BadRequestException("This course is not yours")
    }
    return enroll
  }

  async updateEnrollStatus(enrollId: string, body: UpdateEnrollStatusDto, tutorId: string){
    if (!mongoose.isValidObjectId(enrollId)){
      throw new HttpException("This course ID isn't valid", 404);
    }
    const enroll = await this.enrollModel.findById(enrollId)
    if (!enroll){
      throw new NotFoundException("This enroll ID doesn't exist");
    }

    const course = await this.courseModel.findById(enroll.courseId)
    if (!course) {
      throw new NotFoundException("Can't find course");
    }
    if (course.tutorId !== tutorId){
      throw new BadRequestException("This course is not yours")
    }

    enroll.status = body.status

    if (body.status === "approved"){
      course.students.push(enroll.studentId)
      await course.save();

      const student = await this.userModel.findById(enroll.studentId)
      if (!student) {
        throw new NotFoundException("Can't find student ID");
      }

      if (student.coursesLearned.find(element => element === enroll.courseId)) {
        throw new BadRequestException('You have already enrolled in this course.');
      }

      student.coursesLearned.push(enroll.courseId)
      await student.save();
    }
    
    enroll.dateTimeUpdated = Date.now()
    return await enroll.save().catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    })
  }
}
