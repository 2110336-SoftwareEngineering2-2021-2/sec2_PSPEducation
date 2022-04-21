import { ApiProperty } from '@nestjs/swagger'
import { IsIn } from 'class-validator'

export class UpdateEnrollStatusDto{
  @IsIn(["approved", "rejected"])
  @ApiProperty({type: String, description: "status"})
  status: string
}