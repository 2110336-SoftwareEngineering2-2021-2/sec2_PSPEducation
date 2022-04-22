import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { NotificationDescription } from './dto/notificationDescription';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {

  @Prop({required: true})
  header: string;

  @Prop({required: true})
  body: string;
  
  @Prop({required: true, default: Date.now})
  dateTimeCreated: Date;  

  @Prop({required: true})
  type: string;

  @Prop({default: {}})
  description: NotificationDescription;
  
  @Prop({required: true, default: false})
  isRead: boolean;

  @Prop({required: true})
  userId: ObjectId;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);