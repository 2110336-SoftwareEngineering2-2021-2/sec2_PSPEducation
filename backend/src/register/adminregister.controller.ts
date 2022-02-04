import { Controller, Get } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('admin/register')
export class AdminRegisterController {
  constructor(private registerService: RegisterService) {}

  @Get('/waiting')
  getWaitingTutorRegister() {
    return this.registerService.findWaitingTutorRegister()
  }
}