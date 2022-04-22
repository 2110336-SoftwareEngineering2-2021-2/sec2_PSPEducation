import { Injectable, NotFoundException, BadRequestException, HttpException, ForbiddenException, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChangeCreditHistoryStatusByIdDto } from './dto/change-credit-history-status-by-id.dto';
import * as mongoose from 'mongoose'
import { ChangeCreditByUserIdDto } from './dto/change-credit-by-userId.dto';
import { CreateCreditHistoryDto } from './dto/create-credit-history.dto';
import { UserService } from '../user/user.service';
import { TransactionType } from '../constant'
import { ChangeBalanceReponseDto } from './dto/change-balance-reponse.dto';

@Injectable()
export class CreditService {
  constructor(
    @InjectModel('credits') private readonly creditModel: Model<any>,
    @InjectModel('creditHistories') private readonly creditHistoryModel: Model<any>,
    @Inject(forwardRef(() => UserService))
    private userService: UserService
    // private courseService: CourseService
  ) {}

  async createCredit(userId: string) {
    const credit = new this.creditModel({userId: userId});
    return await credit.save().catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    })
  }

  async createCreditHistory(body: CreateCreditHistoryDto) {
    const creditHistory = new this.creditHistoryModel(body);
    return await creditHistory.save().catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    })
  }

  async getBalanceByUserId(userId: string) {
    const user = await this.userService.findById(userId)
    const credit = await this.creditModel.findOne({userId: userId});
    const response = {
      balance: credit.balance,
      firstname: user.firstname,
      lastname: user.lastname,
      imgURL: user.picture
    }
    return response;
  }

  async getCreditHistoryByUserId(userId: string){
    if (!mongoose.isValidObjectId(userId)){
      throw new BadRequestException("This user ID isn't valid");
    }

    // const user = await this.userService.findById(userId)
    // const creditHistories = await this.creditHistoryModel.find({userId: userId}).sort({dateTimeCreated: -1})

    // const response = [];
    // for (let i=0; i<creditHistories.length; i++){
    //   let c = creditHistories[i];
    //   let c2: CreateCreditHistoryDto;
    //   c2 = {...c._doc, username: user.username, courseName: ''}
    //   if (c.courseId){
    //     const course = await this.courseService.findById(c.courseId);
    //     c2 = {
    //       ...c._doc,
    //       username: user.username,
    //       courseName: course.courseName,
    //     }
    //   }
    //   response.push(c2);
    // }
    // console.log(response)
    return await this.creditHistoryModel.find({userId: userId}).sort({dateTimeCreated: -1})
  }

  async changeBalanceByUserId(userId: string, body: ChangeCreditByUserIdDto){
    if (!mongoose.isValidObjectId(userId)){
      throw new BadRequestException("This user ID isn't valid");
    }
    const credit = await this.creditModel.findOne({userId: userId});
    if (!credit) {
      throw new NotFoundException("This user ID doesn't exist");
    }

    if (credit.balance + body.amountToChange < 0) {
      throw new BadRequestException("You don't have enough money");
    }
    if (body.type === TransactionType.USER_TOPUP && body.amountToChange < 0) {
      throw new BadRequestException("Cannot top up with negative money change");
    }
    if (body.type === TransactionType.STUDENT_ENROLL_COURSE) {
      if (body.amountToChange > 0 || !!!body.courseId) {
        throw new BadRequestException("Cannot buy course with positive money change / no course Id given");
      } 
    }
    if (body.type === TransactionType.TUTOR_ACCEPT_STUDENT && (body.amountToChange < 0 || !!!body.courseId)) {
      throw new BadRequestException("tutor cannot accept negative money / no cousr Id");
    }

    credit.balance += body.amountToChange

    const creditHistory = new CreateCreditHistoryDto()
    creditHistory.userId = userId;
    creditHistory.type = body.type;
    creditHistory.status = "completed";
    creditHistory.amount = body.amountToChange;
    if (body.type !== TransactionType.USER_TOPUP) {
      creditHistory.courseId = body.courseId
    }
    const creditHistoryEntity = await this.createCreditHistory(creditHistory);
    await credit.save()

    const response = new ChangeBalanceReponseDto()
    response.creditId = credit.id;
    response.userId = credit.userId;
    response.balance = credit.balance;
    response.dateTimeUpdated = credit.dateTimeUpdated
    response.creditHistoryId = creditHistoryEntity.id
    return response;
  }

  async getAmountByPaymentHistoryId(id: string) {
    const creditHistory = await this.creditHistoryModel.findById(id)
    return creditHistory.amount
  }

  async changeCreditHistoryStatusById(id: string, body: ChangeCreditHistoryStatusByIdDto){
    if (!mongoose.isValidObjectId(id)) {
      throw new HttpException("This Credit history ID isn't valid", 404);
    }
    const creditHistory = await this.creditHistoryModel.findById(id);
    if (!creditHistory) {
      throw new NotFoundException("This Credit history ID doesn't exist");
    }
    creditHistory.status = body.status

    if (body.status === 'canceled') {
      const credit = await this.creditModel.findOne({userId: creditHistory.userId})
      credit.balance -= creditHistory.amount
      await credit.save()
    }

    creditHistory.dateTimeUpdated = Date.now()
    return await creditHistory.save();
  }

}
