import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from 'src/course/course.schema';
import { UserSchema } from 'src/user/user.schema';
import { EnrollController } from './enroll.controller';
import { EnrollSchema } from './enroll.schema';
import { EnrollService } from './enroll.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'enrolls', schema: EnrollSchema }]),
    MongooseModule.forFeature([{ name: 'courses', schema: CourseSchema }]),
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])
  ],
  controllers: [EnrollController],
  providers: [EnrollService]
})
export class EnrollModule {}
