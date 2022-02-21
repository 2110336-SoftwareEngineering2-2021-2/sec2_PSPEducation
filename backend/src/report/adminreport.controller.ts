import { Controller, Get, Patch, UseGuards, Param, Body } from '@nestjs/common';
import { ReportService } from './report.service';
import { AdminGuard } from '../guard/admin.guard';
import { UpdateReportStatusDto } from './dto/update-report-status.dto'

@Controller('admin/report')
@UseGuards(AdminGuard) //only logged in admin can make these requests
export class AdminReportController {
  constructor(private reportService: ReportService) {}

  @Get("/waiting")
  getWaitingReport(){
    return this.reportService.getAllWaitingReport()
  }

  @Patch("/:reportId")
  updateReportStatus(@Param("reportId") id: string, @Body() body: UpdateReportStatusDto){
    return this.reportService.updateReportStatus(id, body);
  }
}