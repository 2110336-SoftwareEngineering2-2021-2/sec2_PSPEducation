import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

export type CreditHistoryDocument = CreditHistory & Document;

@Schema()
export class CreditHistory {

  @Prop({required: true})
  userId: ObjectId;

  @Prop({required: true})
  type: number;

  @Prop({required: true})
  status: string;
  
  @Prop()
  courseId: ObjectId;
  
  @Prop({required: true})
  amount: number;
  
  @Prop({required: true, default: Date.now})
  dateTimeCreated: Date;

  @Prop({required: true, default: Date.now})
  dateTimeUpdated: Date;
}

export const CreditHistorySchema = SchemaFactory.createForClass(CreditHistory);