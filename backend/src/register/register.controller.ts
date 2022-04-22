import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { ApiBody, ApiCreatedResponse, ApiHeader, ApiOkResponse, ApiOperation, ApiPayloadTooLargeResponse, ApiResponse } from '@nestjs/swagger';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService){}
  
  @Post()
  @ApiOperation({summary: "Create Registration", tags: ["Registration"]})
  @ApiBody({type: CreateRegisterDto})
  @ApiCreatedResponse({description: "Create Registration"})
  createRegister(@Body() body: CreateRegisterDto){
    return this.registerService.createRegister(body)
  }

  @Get()
  @ApiOperation({summary: "Get all Registration", tags: ["Registration"]})
  @ApiOkResponse({description: "Return list of registration"})
  getAllRegister() {
    return this.registerService.findAll()
  }

  @Get("/:id")
  @ApiOperation({summary: "Get Registration By Id", tags: ["Registration"]})
  @ApiOkResponse({description: "Return registration"})
  getRegisterById(@Param("id") id: string){
    return this.registerService.findById(id)
  }
  
}
