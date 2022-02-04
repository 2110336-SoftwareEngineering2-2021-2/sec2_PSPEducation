import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { CreateRegisterDto } from './dto/create-register.dto';
import { UserService } from 'src/user/user.service';

const STATUS_WAITING = "waiting"

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel('registers') private readonly registerModel: Model<any>,
    private userService: UserService
  ) {}

  async createRegister(body: CreateRegisterDto){
    let registerItem;

    if (body.type === "student") {
      registerItem = new this.registerModel(body)
      this.userService.createUser(body)
    } else if (body.type === "tutor") {
      registerItem = new this.registerModel({...body, status: STATUS_WAITING}) //automatically add "waiting" status to reigsterItem
    }
    return await registerItem.save()
  }

  async findAll() {
    return await this.registerModel.find()
  }

  async findById(id: string) {
    if (!mongoose.isValidObjectId(id)){
      throw new BadRequestException("This register ID isn't valid");
    }
    const user = await this.registerModel.findById(id)
    if (!user){
      throw new NotFoundException("This register ID doesn't exist");
    }
    return user
  }

  async findWaitingTutorRegister() {
    return await this.registerModel.find({type: "tutor", status: STATUS_WAITING}).sort({dateTimeCreated: 1})
  }


  
}
