import { Controller, Get, Patch, UseGuards, Param, Body } from '@nestjs/common';
import { ReportService } from './report.service';
import { AdminGuard } from '../guard/admin.guard';
import { UpdateReportStatusDto } from './dto/update-report-status.dto'
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('admin/report')
@UseGuards(AdminGuard) //only logged in admin can make these requests
export class AdminReportController {
  constructor(private reportService: ReportService) {}

  @Get("/waiting")
  @ApiOperation({summary: "Get Waiting Report", tags: ["Report"]})
  @ApiOkResponse({description: "Return list of report"})
  getWaitingReport(){
    return this.reportService.getAllWaitingReport()
  }

  @Patch("/:reportId")
  @ApiOperation({summary: "Update Report Status", tags: ["Report"]})
  @ApiCreatedResponse({description: "Return updated Report"})
  @ApiBody({type: UpdateReportStatusDto})
  updateReportStatus(@Param("reportId") id: string, @Body() body: UpdateReportStatusDto){
    return this.reportService.updateReportStatus(id, body);
  }
}