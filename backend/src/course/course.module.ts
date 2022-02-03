import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './course.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'courses', schema: CourseSchema }])],
  providers: [CourseService],
  controllers: [CourseController]
})
export class CourseModule {}
