import { Controller, Get, Patch, UseGuards, Param, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { AdminGuard } from '../guard/admin.guard';
import { ValidateRegisterDto } from './dto/validate-register.dto'

@Controller('admin/register')
@UseGuards(AdminGuard) //only logged in admin can make these requests
export class AdminRegisterController {
  constructor(private registerService: RegisterService) {}

  @Get('/waiting')
  getWaitingTutorRegister() {
    return this.registerService.findWaitingTutorRegister();
  }

  @Patch('/:id')
  validateRegistrationRequest(@Param('id') id: string, @Body() body: ValidateRegisterDto) {
    return this.registerService.changeRegisterStatus(id, body.status);
  }
}