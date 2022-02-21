import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/user.schema';
import { ReportController } from './report.controller';
import { ReportSchema } from './report.schema';
import { ReportService } from './report.service';
import { AdminReportController } from './adminreport.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'reports', schema: ReportSchema }]),
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
],
  controllers: [ReportController, AdminReportController],
  providers: [ReportService]
})
export class ReportModule {}
