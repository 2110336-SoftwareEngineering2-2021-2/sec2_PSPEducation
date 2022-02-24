import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportDocument = Report & Document;

@Schema()
export class Report {

  @Prop({required: true})
  userId: string;

  @Prop({required: true, default: "waiting"})
  status: string;

  @Prop({required: true})
  title: string;

  @Prop({required: true})
  type: number;

  @Prop({required: true})
  detail: string;

  @Prop({})
  picture: String[];

  @Prop({required: true, default: Date.now})
  dateTimeCreated: Date;

  @Prop({required: true, default: Date.now})
  dateTimeUpdated: Date;
}

export const ReportSchema = SchemaFactory.createForClass(Report);