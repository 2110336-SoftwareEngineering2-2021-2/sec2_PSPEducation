import { Type } from 'class-transformer';
import { IsString, IsMongoId, IsOptional, IsDefined } from 'class-validator'
import { NotificationDescription } from './notificationDescription';

export class NotificationDto{
  @IsString()
  header: string;

  @IsString()
  body: string;

  @IsString()
  type: string;

  @IsOptional()
  @Type(() => NotificationDto)
  description: NotificationDescription;

  @IsMongoId()
  userId: string;
}