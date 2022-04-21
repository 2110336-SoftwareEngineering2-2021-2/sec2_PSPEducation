import { Controller, Get, Param, Patch } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('notification')
export class NotificationController {
  @Get("user/:userId")
  @ApiOperation({summary: "Get Notification By User Id", tags: ["Notification"]})
  @ApiOkResponse({description: "Return Notification"})
  @ApiResponse({status: 400, description: "No User Id Exist"})
  getNotificationsByUserID(@Param("userId") userID: String){
    return
  }

  @Patch("/:notificationId")
  @ApiOperation({summary: "Update Notification Status (Read Status)", tags: ["Notification"]})
  @ApiOkResponse({description: "Return updated Notification"})
  @ApiResponse({status: 400, description: "No Notification Id Exist"})
  readNotification(@Param("notificationId") notificationID: String){
    return
  }
}