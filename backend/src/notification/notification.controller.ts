import { Controller, Get, Param, Patch } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Get("user/:userId")
  @ApiOperation({summary: "Get Notification By User Id", tags: ["Notification"]})
  @ApiOkResponse({description: "Return Notification"})
  @ApiResponse({status: 400, description: "No User Id Exist"})
  getNotificationsByUserID(@Param("userId") userId: string){
    return this.notificationService.getNotificationsByUserId(userId);
  }

  @Patch("/:notificationId")
  @ApiOperation({summary: "Update Notification Status (Read Status)", tags: ["Notification"]})
  @ApiOkResponse({description: "Return updated Notification"})
  @ApiResponse({status: 400, description: "No Notification Id Exist"})
  readNotification(@Param("notificationId") notificationId: string){
    return this.notificationService.readNotification(notificationId);
  }
}