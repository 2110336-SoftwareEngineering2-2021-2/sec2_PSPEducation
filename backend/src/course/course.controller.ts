import { Controller, Param, Get, Post, Body, Patch, Session, UseGuards } from '@nestjs/common';
import { Course } from './course.schema';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';

import { CurrentUser } from '../user/decorators/current-user.decorator';
import { UserDto } from '../user/dto/user.dto'

import { AuthGuard } from 'src/guard/auth.guard';
import { TutorGuard } from '../guard/tutor.guard';
import { UpdateCourseStatusDto } from './dto/update-course-status.dto';
import { CourseDto } from './dto/course.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('course')
// @Serialize(CourseDto)
export class CourseController {
  constructor(private courseService: CourseService){}

  @UseGuards(TutorGuard)
  @Post()
  @ApiOperation({summary: "Create Course", tags: ["Course"]})
  @ApiOkResponse({description: "Return created course"})
  @ApiBody({type: CreateCourseDto})
  createCourse(@Body() body: CreateCourseDto){
    return this.courseService.createCourse(body)
  }

  @Get()
  @ApiOperation({summary: "Get all Courses", tags: ["Course"]})
  @ApiOkResponse({description: "Return list of courses"})
  getAllCourse() {
    return this.courseService.findAll()
  }
  
  @Get("/:id")
  @ApiOperation({summary: "Get Course By Id", tags: ["Course"]})
  @ApiOkResponse({description: "Return course"})
  getCourseById(@Param("id") id: string){
    return this.courseService.findById(id)
  }

  @Get("tutor/:id")
  @ApiOperation({summary: "Get Course By TutorId", tags: ["Course"]})
  @ApiOkResponse({description: "Return course"})
  getCourseByTutor(@Param("id") id: string){
    return this.courseService.findByTutor(id)
  }

  @UseGuards(TutorGuard)
  @Patch("update/status/:id")
  @ApiOperation({summary: "Update Course Status By Id", tags: ["Course"]})
  @ApiCreatedResponse({description: "Return updated course"})
  @ApiBody({type: UpdateCourseStatusDto})
  updateCourseStatusById(@Param("id") id: string, @Body() body: UpdateCourseStatusDto, @Session() session: any){
    return this.courseService.updateCourseStatus(id, body, session.userId);
  }

  @UseGuards(TutorGuard)
  @Patch("update/:id")
  @ApiOperation({summary: "Update Course By Id", tags: ["Course"]})
  @ApiCreatedResponse({description: "Return updated course"})
  @ApiBody({type: Course})
  updateCourseById(@Param("id") id: string, @Body() body: Partial<Course>, @Session() session: any){
    return this.courseService.updateCourse(id, body, session.userId);
  }

  @UseGuards(TutorGuard)
  @Get("/tutor")
  @ApiOperation({summary: "Get Tutor Course", tags: ["Course"]})
  @ApiOkResponse({description: "Return courses of the login tutor"})
  async getTutorCourses(@Session() session: any) {
    return await this.courseService.findByTutor(session.userId);
  }
}
