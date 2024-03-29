import { HttpException, Injectable, NotFoundException, BadRequestException, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { CreateRegisterDto } from '../register/dto/create-register.dto';
import { User } from './user.schema';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { CreditService } from '../credit/credit.service';

process.on('unhandledRejection', (reason, p) => {
  // console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

@Injectable()
export class UserService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<any>,
    @Inject(forwardRef(() => CreditService))
    private creditService: CreditService
  ) {}

  async createUser(body: CreateRegisterDto){
    const user = new this.userModel(body)
    await user.save().catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    })
    const credit = this.creditService.createCredit(user.id)
    return user
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

  async updateUser(id: string, attrs: Partial<User>){ // user_id
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This user ID isn't valid", 404);
    }
    const user = await this.userModel.findById(id)
    if (!user){
      throw new NotFoundException("This user ID doesn't exist");
    }

    const filter = { _id: user.id };
    const answer = await this.userModel.findOneAndUpdate(filter, attrs, { new: true }).catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    })
    // answer.firstname -> new value (if use new: true)
    answer.dateTimeUpdated = Date.now()
    return await answer.save()
  }

  async updateUserPassword(id: string, body: UpdateUserPasswordDto){
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This user ID isn't valid", 404);
    }

    const user = await this.userModel.findById(id)
    if (!user){
      throw new NotFoundException("This user ID doesn't exist");
    }

    if (user.password !== body.oldPassword) {
      throw new BadRequestException("Incorrect Password");
    }

    if (body.confirmNewPassword !== body.newPassword) {
      throw new BadRequestException("Password confirmation doesn't match");
    }

    
    user.password = body.newPassword
    user.dateTimeUpdated = Date.now()
    return await user.save()
  }
}