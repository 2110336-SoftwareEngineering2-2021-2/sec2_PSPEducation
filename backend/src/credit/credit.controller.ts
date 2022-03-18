import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { checkUserIdWithSession } from 'src/utils';
import { CreditService } from './credit.service';
import { ChangeCreditByUserIdDto } from './dto/change-credit-by-userId.dto';
import { ChangeCreditHistoryStatusByIdDto } from './dto/change-credit-history-status-by-id.dto';

@Controller('credit')
export class CreditController {
  constructor(private creditService: CreditService){}

  @Get('/user/balance/:userId')
  getBalanceByUserId(@Param('userId') userId: string){
    return this.creditService.getBalanceByUserId(userId);
  }

  @Get('/user/history/:userId')
  getCreditHistoryByUserId(@Param('userId') userId: string){
    return this.creditService.getCreditHistoryByUserId(userId);
  }

  @Patch('/user/balance/:userId')
  changeBalanceByUserId(@Param('userId') userId: string, @Body() body: ChangeCreditByUserIdDto){
    return this.creditService.changeBalanceByUserId(userId, body)
  }
}
