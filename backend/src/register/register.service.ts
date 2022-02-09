import { Injectable, NotFoundException, BadRequestException, HttpException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { CreateRegisterDto } from './dto/create-register.dto';
import { UserService } from 'src/user/user.service';
import { assert } from 'console';

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

    return await registerItem.save().catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    })
  }

  async findAll() {
    return await this.registerModel.find()
  }

  async findById(id: string) {
    if (!mongoose.isValidObjectId(id)){
      throw new BadRequestException("This register ID isn't valid");
    }
    const registerItem = await this.registerModel.findById(id)
    if (!registerItem){
      throw new NotFoundException("This register ID doesn't exist");
    }
    return registerItem
  }

  async findWaitingTutorRegister() {
    return await this.registerModel.find({type: "tutor", status: STATUS_WAITING}).sort({dateTimeCreated: 1})
  }

  async changeRegisterStatus(id: string, status: string) {
    const registerItem = await this.registerModel.findById(id);
    if (!registerItem) {
      throw new NotFoundException("This register ID doesn't exist");
    }
    registerItem.status = status;
    if (status === 'approved') {
      this.userService.createUser({
        type: registerItem.type,
        firstname: registerItem.firstname,
        lastname: registerItem.lastname,
        username: registerItem.username,
        password: registerItem.password,
        email: registerItem.email,
        phoneNumber: registerItem.phoneNumber,
        displayName: registerItem.displayName,
        birthdate: registerItem.birthdate,
        gender: registerItem.gender,
        educationalLevel: registerItem.educationalLevel,
        picture: registerItem.picture,
        citizenId: registerItem.citizenId,
        citizenImage: registerItem.citizenId
      });
    }

    registerItem.dateTimeUpdated = Date.now()
    return await registerItem.save().catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    });
  }
}
