import { IsMongoId } from 'class-validator'

export class CreateEnrollDto{
  @IsMongoId()
  studentId: string 

  @IsMongoId()
  courseId: string 

}