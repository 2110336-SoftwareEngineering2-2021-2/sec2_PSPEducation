import { Controller, Param, Get, Post, Body, Patch, Session, UseGuards } from '@nestjs/common';
import { Course } from './course.schema';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';

import { CurrentUser } from '../user/decorators/current-user.decorator';
import { UserDto } from '../user/dto/user.dto'

import { AuthGuard } from 'src/guard/auth.guard';
import { TutorGuard } from 'src/guard/tutor.guard';
import { UpdateCourseStatusDto } from './dto/update-course-status.dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService){}

  @UseGuards(TutorGuard)
  @Post()
  createCourse(@Body() body: CreateCourseDto){
    return this.courseService.createCourse(body)
  }

  @Get()
  getAllCourse() {
    return this.courseService.findAll()
  }
  
  @UseGuards(AuthGuard)
  @Get("/:id")
  getCourseById(@Param("id") id: string){
    return this.courseService.findById(id)
  }

  @Get("tutor/:id")
  getCourseByTutor(@Param("id") id: string){
    return this.courseService.findByTutor(id)
  }

  @UseGuards(TutorGuard)
  @Patch("update/status/:id")
  updateCourseStatusById(@Param("id") id: string, @Body() body: UpdateCourseStatusDto, @Session() session: any){
    return this.courseService.updateCourseStatus(id, body, session.userId);
  }

  @UseGuards(TutorGuard)
  @Patch("update/:id")
  updateCourseById(@Param("id") id: string, @Body() body: Partial<Course>, @Session() session: any){
    return this.courseService.updateCourse(id, body, session.userId);
  }

  @UseGuards(TutorGuard)
  @Get("/tutor")
  async getTutorCourses(@Session() session: any) {
    return await this.courseService.findByTutor(session.userId);
  }
}
