import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { StudentModule } from './student/student.module';
import { TutorModule } from './tutor/tutor.module';
import { CourseModule } from './course/course.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RegisterModule, StudentModule, TutorModule, CourseModule, MongooseModule.forRoot('mongodb://localhost:27017/whereismytutor')],
  controllers: [],
  providers: [],
})
export class AppModule {}
