import { Controller, Get, Patch, UseGuards, Param, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { AdminGuard } from '../guard/admin.guard';
import { ValidateRegisterDto } from './dto/validate-register.dto'
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('admin/register')
@UseGuards(AdminGuard) //only logged in admin can make these requests
export class AdminRegisterController {
  constructor(private registerService: RegisterService) {}

  @Get('/waiting')
  @ApiOperation({summary: "Get Waiting Tutor Registration", tags: ["Admin Registration"]})
  @ApiOkResponse({description: "Return list of registration"})
  getWaitingTutorRegister() {
    return this.registerService.findWaitingTutorRegister();
  }

  @Patch('/:id')
  @ApiOperation({summary: "Validate Registration Request", tags: ["Admin Registration"]})
  @ApiCreatedResponse({description: "Return created tutor"})
  @ApiBody({type: ValidateRegisterDto})
  validateRegistrationRequest(@Param('id') id: string, @Body() body: ValidateRegisterDto) {
    return this.registerService.changeRegisterStatus(id, body.status);
  }
}