import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from 'src/course/course.module';
import { CourseSchema } from 'src/course/course.schema';
import { CreditModule } from 'src/credit/credit.module';
import { UserModule } from 'src/user/user.module';
import { UserSchema } from 'src/user/user.schema';
import { EnrollController } from './enroll.controller';
import { EnrollSchema } from './enroll.schema';
import { EnrollService } from './enroll.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'enrolls', schema: EnrollSchema }]),
    MongooseModule.forFeature([{ name: 'courses', schema: CourseSchema }]),
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
    CreditModule, UserModule, CourseModule
  ],
  controllers: [EnrollController],
  providers: [EnrollService]
})
export class EnrollModule {}
