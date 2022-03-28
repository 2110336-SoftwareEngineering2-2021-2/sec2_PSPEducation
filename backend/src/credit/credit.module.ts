import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from 'src/course/course.module';
import { UserModule } from 'src/user/user.module';
import { CreditController } from './credit.controller';
import { CreditSchema } from './credit.schema';
import { CreditService } from './credit.service';
import { CreditHistorySchema } from './credithistory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'credits', schema: CreditSchema }]),
    MongooseModule.forFeature([{ name: 'creditHistories', schema: CreditHistorySchema }]),
    CourseModule,
    forwardRef(() => UserModule)
  ],
  controllers: [CreditController],
  providers: [CreditService],
  exports: [CreditService]
})
export class CreditModule {}
