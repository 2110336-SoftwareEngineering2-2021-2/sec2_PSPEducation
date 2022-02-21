import { Controller, Get, Param, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
// Guard
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService){}

  @Get()
  getAllReport(){
    return this.reportService.getAllReport()
  }

  @Get("/:reportId")
  getReportById(@Param("reportId") id: string){
    return this.reportService.getReportById(id)
  }

  @Get("/user/:userId")
  getReportByUserId(@Param ("userId") id: string) {
    return this.reportService.getReportByUserId(id)
  }

  @Post()
  @UseGuards(AuthGuard)
  createReport(@Body() body : CreateReportDto){
    return this.reportService.createReport(body)
  }

}
