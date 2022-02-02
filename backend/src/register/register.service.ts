import { Injectable, NotFoundException, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { CreateRegisterDto } from './dto/create-register.dto';

// const mongoose = new Mongoose
@Injectable()
export class RegisterService {
  constructor(@InjectModel('registers') private readonly registerModel: Model<any>) {}

  async createRegister(body: CreateRegisterDto){
    const user = new this.registerModel(body)
    return await user.save()
  }

  async findAll() {
    return await this.registerModel.find()
  }

  async findById(id: string) {
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This register ID isn't valid", 404);
    }
    const user = await this.registerModel.findById(id)
    if (!user){
      throw new NotFoundException("This register ID doesn't exist");
    }
    return user
  }
}
