import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { EnrollService } from './enroll.service';
import { UpdateEnrollStatusDto } from './dto/update-enroll-status.dto';

@Controller('enroll')
export class EnrollController {
  constructor(private enrollService: EnrollService){}

  @Post()
  createEnroll(@Body() body: CreateEnrollDto){
    return this.enrollService.createEnroll(body);
  }

  @Get("/:id")
  getEnrollById(@Param("id") id: string){
    return this.enrollService.findByCourseID(id)
  }
  
  @Patch("/:enrollId")
  updateEnrollStatusById(@Param("enrollId") id: string, @Body() body: UpdateEnrollStatusDto){
    return this.enrollService.updateEnrollStatus(id, body)
  }
}
