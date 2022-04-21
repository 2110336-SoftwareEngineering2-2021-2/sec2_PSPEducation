import { ApiProperty } from '@nestjs/swagger'
import { IsMongoId } from 'class-validator'

export class CreateEnrollDto{
  @IsMongoId()
  @ApiProperty({type: String, description: "studentId"})
  studentId: string 

  @IsMongoId()
  @ApiProperty({type: String, description: "courseId"})
  courseId: string 

}