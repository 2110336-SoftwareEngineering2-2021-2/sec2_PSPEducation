import { ApiProperty } from '@nestjs/swagger'
import { IsIn } from 'class-validator'

export class UpdateCourseStatusDto {
  @IsIn(['published', 'unpublished'])
  @ApiProperty({type: String, description: "status"})
  status: string
}           