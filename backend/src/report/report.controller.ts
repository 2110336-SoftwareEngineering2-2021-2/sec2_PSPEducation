import { Controller, Get, Param, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
// Guard
import { AuthGuard } from 'src/guard/auth.guard';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService){}

  @Get()
  @ApiOperation({summary: "Get all Reports", tags: ["Report"]})
  @ApiOkResponse({description: "Return list of reports"})
  getAllReport(){
    return this.reportService.getAllReport()
  }

  @Get("/:reportId")
  @ApiOperation({summary: "Get Report By Id", tags: ["Report"]})
  @ApiOkResponse({description: "Return report"})
  getReportById(@Param("reportId") id: string){
    return this.reportService.getReportById(id)
  }

  @Get("/user/:userId")
  @ApiOperation({summary: "Get Report By UserId", tags: ["Report"]})
  @ApiOkResponse({description: "Return report"})
  getReportByUserId(@Param ("userId") id: string) {
    return this.reportService.getReportByUserId(id)
  }

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({summary: "Create Report", tags: ["Report"]})
  @ApiCreatedResponse({description: "Return report"})
  @ApiBody({type: CreateReportDto})
  createReport(@Body() body : CreateReportDto){
    return this.reportService.createReport(body)
  }

}
