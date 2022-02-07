import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Course } from 'src/course/course.schema';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({required: true})
  type: string;

  @Prop()
  isAdmin: boolean;

  @Prop({required: true})
  firstname: string;

  @Prop({required: true})
  lastname: string;

  @Prop({required: true, unique: true})
  username: string;

  @Prop({required: true})
  password: string;

  @Prop({unique: true})
  email: string;

  @Prop({required: true})
  phoneNumber: string;

  @Prop({required: true})
  displayName: string;

  @Prop({required: true})
  birthdate: string;

  @Prop({required: true})
  gender: string;

  @Prop({required: true})
  educationalLevel: number;

  @Prop()
  picture: string; 

  @Prop({unique: true})
  citizenId: string;

  @Prop()
  citizenImage: string;

  @Prop({default: []})
  coursesLearned: string[];

  @Prop({required: true, default: Date.now})
  dateTimeCreated: Date;

  @Prop({required: true, default: Date.now})
  dateTimeUpdated: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);