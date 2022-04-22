import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './course.schema';
import { UserSchema } from '../user/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'courses', schema: CourseSchema }]),
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])
  ],
  providers: [CourseService],
  controllers: [CourseController],
  exports: [CourseService]
})
export class CourseModule {}
