import { IsIn } from 'class-validator'

export class UpdateReportStatusDto {
  @IsIn(['solved', 'dismissed', 'waiting'])
  status: string;
}