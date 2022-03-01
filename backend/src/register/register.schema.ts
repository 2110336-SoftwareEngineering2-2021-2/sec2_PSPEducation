import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegisterDocument = Register & Document;

@Schema()
export class Register {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  displayName: string;

  @Prop({ required: true })
  birthdate: string;

  @Prop({ required: true })
  gender: string;

  @Prop()
  status: string;

  @Prop({ required: true })
  educationalLevel: number;

  @Prop()
  picture: Array<string>; //!!!EDITED

  @Prop({ unique: true })
  citizenId: string;

  @Prop()
  citizenImage: string;

  @Prop({ required: true, default: Date.now })
  dateTimeCreated: Date;

  @Prop({ required: true, default: Date.now })
  dateTimeUpdated: Date;
}

export const RegisterSchema = SchemaFactory.createForClass(Register);
