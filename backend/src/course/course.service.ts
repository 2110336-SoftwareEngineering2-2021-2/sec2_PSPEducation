import { BadRequestException, HttpException, Injectable, NotFoundException, Session } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseStatusDto } from './dto/update-course-status.dto';
import { Course } from './course.schema';

process.on('unhandledRejection', (reason, p) => {
  // console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

@Injectable()
export class CourseService {
  constructor(
    @InjectModel('courses') private readonly courseModel: Model<any>,
    @InjectModel('users') private readonly userModel: Model<any>
  ) {}

  async createCourse(body: CreateCourseDto){ 
    const tutor = await this.userModel.findById(body.tutorId)
    if(!tutor){
      throw new NotFoundException("This tutor ID doesn't exist");
    }
    if(tutor.type !== "tutor"){
      throw new HttpException("This user Id isn't tutor", 404);
    }
    const course = new this.courseModel(body)
    return await course.save().catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    })
  }

  async findAll(){
    return await this.courseModel.find()
  }

  async findById(id: string) { // course_id
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This course ID isn't valid", 404);
    }
    const course = await this.courseModel.findById(id)
    if (!course){
      throw new NotFoundException("This course ID doesn't exist");
    }
    return course
  }

  async findByTutor(id: string){ // tutor_id
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This tutor ID isn't valid", 404);
    }
    const tutor = await this.userModel.findById(id)
    if(!tutor){
      throw new NotFoundException("This tutor ID doesn't exist");
    }
    if(tutor.type !== "tutor"){
      throw new HttpException("This user Id isn't tutor", 404);
    }
    const course = await this.courseModel.find({ tutorId: id })
    if (!course){
      throw new NotFoundException("This course ID doesn't exist");
    }
    return course
  }

  async updateCourseStatus(id: string, body: UpdateCourseStatusDto ,tutorId: string){ // course_id
    
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This course ID isn't valid", 404);
    }
    const course = await this.courseModel.findById(id)
    if (!course){
      throw new NotFoundException("This course ID doesn't exist");
    }

    if (course.tutorId !== tutorId) {
      throw new BadRequestException("This course ID is not yours");
    }

    course.status = body.status;
    course.dateTimeUpdated = Date.now();
    return await course.save().catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    })
  }

  async updateCourse(id: string, attrs: Partial<Course>, tutorId: string){ // course_id
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This course ID isn't valid", 404);
    }
    const course = await this.courseModel.findById(id)
    if (!course){
      throw new NotFoundException("This course ID doesn't exist");
    }

    if (course.tutorId !== tutorId) {
      throw new BadRequestException("This course ID is not yours");
    }

    const filter = { id: course.id };
    const answer = await this.courseModel.findOneAndUpdate(filter, attrs, { new: true })
    answer.dateTimeUpdated = Date.now()
    return await answer.save().catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    })
  }

}
