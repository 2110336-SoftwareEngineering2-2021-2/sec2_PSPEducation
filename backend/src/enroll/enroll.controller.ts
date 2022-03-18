import { Body, Controller, Get, Param, Post, Patch, UseGuards, Session } from '@nestjs/common';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { EnrollService } from './enroll.service';
import { UpdateEnrollStatusDto } from './dto/update-enroll-status.dto';
import { StudentGuard } from 'src/guard/student.guard';
import { TutorGuard } from 'src/guard/tutor.guard';

@Controller('enroll')
export class EnrollController {
  constructor(private enrollService: EnrollService){}

  @UseGuards(StudentGuard)
  @Post()
  createEnroll(@Body() body: CreateEnrollDto){
    return this.enrollService.createEnroll(body);
  }

  @Get("/:id")
  getEnrollById(@Param("id") id: string){
    return this.enrollService.findByCourseId(id);
  }

  @UseGuards(TutorGuard)
  @Get("waiting/:id")
  getWaitingEnrollById(@Param("id") id: string, @Session() session: any){
    return this.enrollService.findWaitingByCourseId(id, session.userId);
  }

  @UseGuards(TutorGuard)
  @Get("waiting/tutor/:tutorId")
  getWaitingEnrollByTutorId(@Param("tutorId") tutorId: string){
    return this.enrollService.findWaitingByTutorId(tutorId);
  }

  @UseGuards(StudentGuard)
  @Get("waiting/student/:studentId")
  getWaitingEnrollByStudentId(@Param("studentId") studentId: string){
    return this.enrollService.findWaitingByStudentId(studentId);
  }

  @UseGuards(StudentGuard)
  @Get("/student/:studentId")
  getEnrollByStudentId(@Param("studentId") studentId: string){
    return this.enrollService.getEnrollByStudentID(studentId);
  }

  @UseGuards(TutorGuard)
  @Patch("/:enrollId")
  updateEnrollStatusById(@Param("enrollId") id: string, @Body() body: UpdateEnrollStatusDto, @Session() session: any){
    return this.enrollService.updateEnrollStatus(id, body, session.userId);
  }

  @UseGuards(StudentGuard)
  @Patch("/cancel/:enrollId")
  cancelEnrollmentById(@Param("enrollId") enrollId: string, @Session() session: any) {
    return this.enrollService.cancelEnrollmentById(enrollId, session.userId);
  }
}