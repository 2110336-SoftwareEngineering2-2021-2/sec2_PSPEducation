import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export type EnrollDocument = Enroll & Document;

@Schema()
export class Enroll {

  @Prop({required: true})
  studentId: ObjectId;

  @Prop({required: true})
  courseId: ObjectId;

  @Prop({required: true})
  status: string;

  @Prop({required: true, default: Date.now})
  dateTimeCreated: Date;

  @Prop({required: true, default: Date.now})
  dateTimeUpdated: Date;
}

export const EnrollSchema = SchemaFactory.createForClass(Enroll);