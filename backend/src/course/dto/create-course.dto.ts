import { Type } from 'class-transformer';
import { IsString, IsMongoId, IsDateString, IsArray, IsNumber, IsIn, ValidateNested } from 'class-validator'
import { isValidObjectId, ObjectId } from 'mongoose';
import { TimeSlot } from './timeSlot.dto';

export class CreateCourseDto {
  @IsMongoId()
  tutorId: string // Not sure that it should be string or ObjectId

  @IsString()
  courseName: string

  @IsString()
  subject: string

  @IsString()
  lesson: string

  @IsDateString()
  courseStartDate: Date

  @IsDateString()
  courseFinishDate: Date

  @IsArray()
  @ValidateNested({each:true})
  @Type(() => TimeSlot)
  timeSlots: TimeSlot[]

  @IsNumber()
  price: number

  @IsNumber()
  capacity: number

  @IsString()
  description: string

  @IsNumber()
  hour: number

  @IsIn(["published", "unpublished"])
  status: string

  @IsIn(["onsite", "online", "mixed"])
  learningType: string

  @IsString()
  location: string
}                             