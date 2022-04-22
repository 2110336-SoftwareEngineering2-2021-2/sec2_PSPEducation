import { CreateReportDto } from './dto/create-report.dto';
import { HttpException, Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { UpdateReportStatusDto } from './dto/update-report-status.dto'
import { NotificationService } from 'src/notification/notification.service';

process.on('unhandledRejection', (reason, p) => {
  // console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

@Injectable()
export class ReportService {
  constructor(
    @InjectModel('reports') private readonly reportModel: Model<any>,
    @InjectModel('users') private readonly userModel: Model<any>,
    private notificationService: NotificationService
  ) {}

  async createReport(body: CreateReportDto){
    // check existence of this tutor
    //console.log(body.userId)
    if (!mongoose.isValidObjectId(body.userId)){
      throw new BadRequestException("This report ID doesn't exist");
    }
    const user = await this.userModel.findById(body.userId);
    if(!user){
      throw new NotFoundException("This user ID doesn't exist");
    }
    const service = new this.reportModel(body)
    return await service.save().catch(function(error) {
      throw new BadRequestException({...error, message: "duplicate columns"});
    })
  }

  async getAllReport(){
    return await this.reportModel.find()
  }
  
  async getReportById(id: string) { // report id
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This report ID isn't valid", 404);
    }
    const report = await this.reportModel.findById(id)
    if (!report){
      throw new NotFoundException("This report ID doesn't exist");
    }
    return report
  }

  async getAllWaitingReport(){
    const report = await this.reportModel.find({status: "waiting"})
    if (!report){
      throw new NotFoundException("No waiting report");
    }

    

    const response = []
    for (let i=0; i<report.length; i++){
      // console.log("report.userId: ", report[i].userId)
      const user = await this.userModel.findById(report[i].userId)
      // console.log('user no: ', i)
      // console.log(user)
      let e2 = {
        ...report[i]._doc,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username
      }
      response.push(e2)
    }
    return response
  }

  async getReportByUserId(id: string) { // user id
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This user ID isn't valid", 404);
    }
    const report = await this.reportModel.find({userId: id}).sort({dateTimeCreated: -1})
    if (!report){
      throw new NotFoundException("This report ID doesn't exist");
    }
    return report
  }

  async updateReportStatus(id: string, body: UpdateReportStatusDto){
    if (!mongoose.isValidObjectId(id)){
      throw new HttpException("This report ID isn't valid", 404);
    }
    const report = await this.reportModel.findById(id)
    if (!report){
      throw new NotFoundException("This report ID doesn't exist");
    }
    report.status = body.status
    report.dateTimeUpdated = Date.now()
    // create notification
    await this.notificationService.createNotification({
      userId: report.userId,
      header: `Report Status Updated`,
      body: `Your report "${report.title}" has been ${report.status} by admin on ${report.dateTimeUpdated}.`,
      type: "R1",
    })

    return await report.save()
  }
}
