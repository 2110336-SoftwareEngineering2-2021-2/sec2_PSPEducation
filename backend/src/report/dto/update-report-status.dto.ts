import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator'

export class UpdateReportStatusDto {
  @IsIn(['solved', 'dismissed', 'waiting'])
  @ApiProperty({type: String, description: "status"})
  status: string;
}