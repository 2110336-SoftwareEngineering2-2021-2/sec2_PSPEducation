import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TimeSlot } from './dto/timeSlot.dto';
import { ObjectId } from 'mongodb';

export type CourseDocument = Course & Document;

@Schema()
export class Course {

  @Prop({required: true})
  tutorId: ObjectId;

  @Prop({required: true, unique: true}) // unique or not
  courseName: string;

  @Prop({required: true})
  subject: string;

  @Prop({required: true})
  lesson: string; // Not sure

  @Prop({required: true})
  courseStartDate: Date;

  @Prop({required: true})
  courseFinishDate: Date;

  @Prop({required: true, default: []})
  timeSlots: Array<TimeSlot>; // Not sure

  @Prop({required: true})
  price: number;

  @Prop({required: true})
  capacity: number;

  @Prop({required: true})
  description: string;

  @Prop({required: true})
  hour: number; // Not sure

  @Prop({required: true, default: "unpublished"})
  status: string;

  @Prop({required: true})
  learningType: string;

  @Prop({required: true})
  location: string;

  @Prop({required: true, default: []})
  students: String[]

  @Prop({required: true, default: Date.now})
  dateTimeCreated: Date;

  @Prop({required: true, default: Date.now})
  dateTimeUpdated: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);