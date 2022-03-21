import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export type CreditDocument = Credit & Document;

@Schema()
export class Credit {

  @Prop({required: true})
  userId: ObjectId;

  @Prop({default: 0})
  balance: Number;

  @Prop({required: true, default: Date.now})
  dateTimeCreated: Date;

  @Prop({required: true, default: Date.now})
  dateTimeUpdated: Date;
}

export const CreditSchema = SchemaFactory.createForClass(Credit);