import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { CourseModule } from './course/course.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EnrollModule } from './enroll/enroll.module';

@Module({
  imports: [RegisterModule, CourseModule, MongooseModule.forRoot('mongodb://localhost:27017/whereismytutor'), EnrollModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
