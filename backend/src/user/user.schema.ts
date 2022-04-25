import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Course } from 'src/course/course.schema';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({required: true})
  @ApiProperty({type: String, description: "type"})
  type: string;

  @Prop()
  @ApiProperty({type: String, description: "isAdmin"})
  isAdmin: boolean;

  @Prop({required: true})
  @ApiProperty({type: String, description: "firstname"})
  firstname: string;

  @Prop({required: true})
  @ApiProperty({type: String, description: "lastname"})
  lastname: string;

  @Prop({required: true, unique: true})
  @ApiProperty({type: String, description: "username"})
  username: string;

  @Prop({required: true})
  // @ApiProperty({type: String, description: "password"})
  password: string;

  @Prop({unique: true})
  @ApiProperty({type: String, description: "email"})
  email: string;

  @Prop({required: true})
  @ApiProperty({type: String, description: "phoneNumber"})
  phoneNumber: string;

  @Prop({required: true})
  @ApiProperty({type: String, description: "displayName"})
  displayName: string;

  @Prop({required: true})
  @ApiProperty({type: String, description: "birthdate"})
  birthdate: string;

  @Prop({required: true})
  @ApiProperty({type: String, description: "gender"})
  gender: string;

  @Prop({required: true})
  @ApiProperty({type: Number, description: "educationalLevel"})
  educationalLevel: number;

  @Prop()
  @ApiProperty({type: [String], description: "picture"})
  picture: string[]; 

  @Prop({unique: true})
  @ApiProperty({type: String, description: "citizenId"})
  citizenId: string;

  @Prop()
  @ApiProperty({type: String, description: "citizenImage"})
  citizenImage: string;

  @Prop({default: []})
  @ApiProperty({type: [String], description: "coursesLearned"})
  coursesLearned: string[];

  @Prop({required: true, default: Date.now})
  @ApiProperty({type: Date, description: "dateTimeCreated"})
  dateTimeCreated: Date;

  @Prop({required: true, default: Date.now})
  @ApiProperty({type: Date, description: "dateTimeUpdated"})
  dateTimeUpdated: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);