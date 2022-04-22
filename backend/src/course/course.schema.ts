import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TimeSlot } from './dto/timeSlot.dto';
import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';

export type CourseDocument = Course & Document;

@Schema()
export class Course {

  @Prop({required: true})
  @ApiProperty({type: String, description: "tutorId"})
  tutorId: ObjectId;

  @Prop({required: true, unique: true}) // unique or not
  @ApiProperty({type: String, description: "courseName"})
  courseName: string;

  @Prop({required: true})
  @ApiProperty({type: String, description: "subject"})
  subject: string;

  @Prop({required: true})
  @ApiProperty({type: String, description: "lesson"})
  lesson: string; // Not sure

  @Prop({required: true})
  @ApiProperty({type: Date, description: "courseStartDate"})
  courseStartDate: Date;

  @Prop({required: true})
  @ApiProperty({type: Date, description: "courseFinishDate"})
  courseFinishDate: Date;

  @Prop({required: true, default: []})
  @ApiProperty({type: [TimeSlot], description: "timeSlots"})
  timeSlots: Array<TimeSlot>; // Not sure

  @Prop({required: true})
  @ApiProperty({type: Number, description: "price"})
  price: number;

  @Prop({required: true})
  @ApiProperty({type: Number, description: "capacity"})
  capacity: number;

  @Prop({required: true})
  @ApiProperty({type: String, description: "description"})
  description: string;

  @Prop({required: true})
  @ApiProperty({type: Number, description: "hour"})
  hour: number; // Not sure

  @Prop({required: true, default: "unpublished"})
  @ApiProperty({type: String, description: "status"})
  status: string;

  @Prop({required: true})
  @ApiProperty({type: String, description: "learningType"})
  learningType: string;

  @Prop({required: true})
  @ApiProperty({type: String, description: "location"})
  location: string;

  @Prop({required: true, default: []})
  @ApiProperty({type: [String], description: "students"})
  students: String[]

  @Prop({required: true, default: Date.now})
  @ApiProperty({type: Date, description: "dateTimeCreated"})
  dateTimeCreated: Date;

  @Prop({required: true, default: Date.now})
  @ApiProperty({type: Date, description: "dateTimeUpdated"})
  dateTimeUpdated: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);