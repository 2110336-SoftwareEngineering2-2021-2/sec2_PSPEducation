import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { CreateRegisterDto } from 'src/register/dto/create-register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<any>
  ) {}

  async createUser(body: CreateRegisterDto){
    const user = new this.userModel(body)
    return await user.save()
  }

  async findAll(){
    return await this.userModel.find()
  }

  async findById(id: string) {
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This user ID isn't valid", 404);
    }
    const user = await this.userModel.findById(id)
    if (!user){
      throw new NotFoundException("This user ID doesn't exist");
    }
    return user
  }

  async findByType(type: string) {
    const user = await this.userModel.find({type: type})
    if (!user){
      throw new NotFoundException("This user type doesn't exist");
    }

    return user
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({email: email})
    return user
  }

}