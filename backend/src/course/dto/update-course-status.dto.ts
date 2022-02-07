import { IsIn } from 'class-validator'

export class UpdateCourseStatusDto {
  @IsIn(['published', 'unpublished'])
  status: string
}           