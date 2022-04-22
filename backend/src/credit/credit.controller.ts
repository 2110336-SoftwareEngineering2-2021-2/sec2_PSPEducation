import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { checkUserIdWithSession } from 'src/utils';
import { CreditService } from './credit.service';
import { ChangeCreditByUserIdDto } from './dto/change-credit-by-userId.dto';
import { ChangeCreditHistoryStatusByIdDto } from './dto/change-credit-history-status-by-id.dto';

@Controller('credit')
export class CreditController {
  constructor(private creditService: CreditService){}

  @Get('/user/balance/:userId')
  @ApiOperation({summary: "Get Balance By UserId", tags: ["Credit"]})
  @ApiOkResponse({description: "Return Balance"})
  getBalanceByUserId(@Param('userId') userId: string){
    return this.creditService.getBalanceByUserId(userId);
  }

  @Get('/user/history/:userId')
  @ApiOperation({summary: "Get Credit History By UserId", tags: ["Credit"]})
  @ApiOkResponse({description: "Return Credit History"})
  getCreditHistoryByUserId(@Param('userId') userId: string){
    return this.creditService.getCreditHistoryByUserId(userId);
  }

  @Patch('/user/balance/:userId')
  @ApiOperation({summary: "Change Balance By UserId", tags: ["Credit"]})
  @ApiCreatedResponse({description: "Return updated Balance"})
  @ApiBody({type: ChangeCreditByUserIdDto})
  changeBalanceByUserId(@Param('userId') userId: string, @Body() body: ChangeCreditByUserIdDto){
    return this.creditService.changeBalanceByUserId(userId, body)
  }
}
