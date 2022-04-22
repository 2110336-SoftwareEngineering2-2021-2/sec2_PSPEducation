import { Body, Controller, Get, Param, Post, Patch, UseGuards, Session } from '@nestjs/common';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { EnrollService } from './enroll.service';
import { UpdateEnrollStatusDto } from './dto/update-enroll-status.dto';
import { StudentGuard } from 'src/guard/student.guard';
import { TutorGuard } from 'src/guard/tutor.guard';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('enroll')
export class EnrollController {
  constructor(private enrollService: EnrollService){}

  @UseGuards(StudentGuard)
  @Post()
  @ApiOperation({summary: "Create Enroll", tags: ["Enroll"]})
  @ApiCreatedResponse({description: "Return Enroll"})
  @ApiBody({type: CreateEnrollDto})
  createEnroll(@Body() body: CreateEnrollDto){
    return this.enrollService.createEnroll(body);
  }

  @Get("/:id")
  @ApiOperation({summary: "Get Enroll By Id", tags: ["Enroll"]})
  @ApiOkResponse({description: "Return Enroll"})
  getEnrollById(@Param("id") id: string){
    return this.enrollService.findByCourseId(id);
  }

  @UseGuards(TutorGuard)
  @Get("waiting/:id")
  @ApiOperation({summary: "Get Waiting Enroll By Id", tags: ["Enroll"]})
  @ApiOkResponse({description: "Return Enrolls"})
  getWaitingEnrollById(@Param("id") id: string, @Session() session: any){
    return this.enrollService.findWaitingByCourseId(id, session.userId);
  }

  @UseGuards(TutorGuard)
  @Get("waiting/tutor/:tutorId")
  @ApiOperation({summary: "Get Waiting Enroll By TutorId", tags: ["Enroll"]})
  @ApiOkResponse({description: "Return Enrolls"})
  getWaitingEnrollByTutorId(@Param("tutorId") tutorId: string){
    return this.enrollService.findWaitingByTutorId(tutorId);
  }

  @UseGuards(StudentGuard)
  @Get("waiting/student/:studentId")
  @ApiOperation({summary: "Get Waiting Enroll By StudentId", tags: ["Enroll"]})
  @ApiOkResponse({description: "Return Enrolls"})
  getWaitingEnrollByStudentId(@Param("studentId") studentId: string){
    return this.enrollService.findWaitingByStudentId(studentId);
  }

  @UseGuards(StudentGuard)
  @Get("/student/:studentId")
  @ApiOperation({summary: "Get Enroll By StudentId", tags: ["Enroll"]})
  @ApiOkResponse({description: "Return Enrolls"})
  getEnrollByStudentId(@Param("studentId") studentId: string){
    return this.enrollService.getEnrollByStudentID(studentId);
  }

  @UseGuards(TutorGuard)
  @Patch("/:enrollId")
  @ApiOperation({summary: "Update Enroll Status By Id", tags: ["Enroll"]})
  @ApiCreatedResponse({description: "Return updated Enroll"})
  @ApiBody({type: UpdateEnrollStatusDto})
  updateEnrollStatusById(@Param("enrollId") id: string, @Body() body: UpdateEnrollStatusDto, @Session() session: any){
    return this.enrollService.updateEnrollStatus(id, body, session.userId);
  }

  @UseGuards(StudentGuard)
  @Patch("/cancel/:enrollId")
  @ApiOperation({summary: "Cancel Enroll By Id", tags: ["Enroll"]})
  @ApiCreatedResponse({description: "Return updated Enroll"})
  cancelEnrollmentById(@Param("enrollId") enrollId: string, @Session() session: any) {
    return this.enrollService.cancelEnrollmentById(enrollId, session.userId);
  }
}