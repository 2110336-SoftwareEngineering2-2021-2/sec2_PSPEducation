import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService){}
  
  @Post()
  createRegister(@Body() body: CreateRegisterDto){
    return this.registerService.createRegister(body)
  }

  @Get()
  getAllRegister() {
    return this.registerService.findAll()
  }

  @Get("/:id")
  getRegisterById(@Param("id") id: string){
    return this.registerService.findById(id)
  }
  
}
