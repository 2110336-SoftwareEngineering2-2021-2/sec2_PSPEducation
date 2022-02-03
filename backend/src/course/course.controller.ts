import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService){}

  @Post()
  createCourse(@Body() body: CreateCourseDto){
    return this.courseService.createCourse(body)
  }

  @Get()
  getAllCourse() {
    return this.courseService.findAll()
  }
  
  @Get("/:id")
  getCourseById(@Param("id") id: string){
    return this.courseService.findById(id)
  }

  @Get("tutor/:id")
  getCourseByTutor(@Param("id") id: string){
    return this.courseService.findByTutor(id)
  }
}
