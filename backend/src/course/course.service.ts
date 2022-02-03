import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {
  constructor(@InjectModel('courses') private readonly courseModel: Model<any>) {}

  async createCourse(body: CreateCourseDto){
    const course = new this.courseModel(body)
    return await course.save()
  }

  async findAll(){
    return await this.courseModel.find()
  }

  async findById(id: string) {
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This course ID isn't valid", 404);
    }
    const course = await this.courseModel.findById(id)
    if (!course){
      throw new NotFoundException("This course ID doesn't exist");
    }
    return course
  }

  async findByTutor(id: string){
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This tutor ID isn't valid", 404);
    }
    const course = await this.courseModel.find({ tutorId: id })
    if (!course){
      throw new NotFoundException("This course ID doesn't exist");
    }
    return course
  }
}
