import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsMongoId, IsDateString, IsArray, IsNumber, IsIn, ValidateNested } from 'class-validator'
import { isValidObjectId, ObjectId } from 'mongoose';
import { TimeSlot } from './timeSlot.dto';

export class CreateCourseDto {
  @IsMongoId()
  @ApiProperty({type: String, description: "tutorId"})
  tutorId: string // Not sure that it should be string or ObjectId

  @IsString()
  @ApiProperty({type: String, description: "courseName"})
  courseName: string

  @IsString()
  @ApiProperty({type: String, description: "subject"})
  subject: string

  @IsString()
  @ApiProperty({type: String, description: "lesson"})
  lesson: string

  @IsDateString()
  @ApiProperty({type: Date, description: "courseStartDate"})
  courseStartDate: Date

  @IsDateString()
  @ApiProperty({type: Date, description: "courseFinishDate"})
  courseFinishDate: Date

  @IsArray()
  @ValidateNested({each:true})
  @Type(() => TimeSlot)
  @ApiProperty({type: [TimeSlot], description: "timeSlots"})
  timeSlots: TimeSlot[]

  @IsNumber()
  @ApiProperty({type: Number, description: "price"})
  price: number

  @IsNumber()
  @ApiProperty({type: Number, description: "capacity"})
  capacity: number

  @IsString()
  @ApiProperty({type: String, description: "description"})
  description: string

  @IsNumber()
  @ApiProperty({type: Number, description: "hour"})
  hour: number

  @IsIn(["published", "unpublished"])
  @ApiProperty({type: String, description: "status"})
  status: string

  @IsIn(["onsite", "online", "mixed"])
  @ApiProperty({type: String, description: "learningType"})
  learningType: string

  @IsString()
  @ApiProperty({type: String, description: "location"})
  location: string
}                             