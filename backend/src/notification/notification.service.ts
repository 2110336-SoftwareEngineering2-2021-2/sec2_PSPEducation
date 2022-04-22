import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NotificationDto } from './dto/notification.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel('notifications') private readonly notificationModel: Model<any>,
    private userService: UserService
  ) {}
  
  async getNotificationsByUserId(userId: string) {
    if (await this.userService.findById(userId)) {
      const notifications = await this.notificationModel.find({userId: userId}).sort({dateTimeCreated: -1})
      return notifications
    }
  }

  async readNotification(notificationID: string) {
    const notification = await this.notificationModel.findById(notificationID)
    notification.isRead = true
    return notification.save()
  }

  async createNotification(notificationDto: object){
    const notification = new this.notificationModel(notificationDto)
    return notification.save()
  }
}
