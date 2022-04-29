import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { CourseModule } from './course/course.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EnrollModule } from './enroll/enroll.module';
import { ReportModule } from './report/report.module';
import { CreditModule } from './credit/credit.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [RegisterModule, CourseModule, MongooseModule.forRoot('mongodb://mheng:5678@db:27017/whereismytutor'), EnrollModule, ReportModule, CreditModule, NotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
