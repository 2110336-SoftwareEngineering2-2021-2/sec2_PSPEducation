import { IsString, IsOptional } from "class-validator"

export class NotificationDescription {
  @IsOptional()
  @IsString()
  courseId: string
}
