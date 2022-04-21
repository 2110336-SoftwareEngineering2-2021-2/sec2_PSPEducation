import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsMilitaryTime } from 'class-validator'

export class TimeSlot {
  @IsIn(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])
  @ApiProperty({type: String, description: "day"})
  day: string;

  @IsMilitaryTime() //HH:MM
  @ApiProperty({type: String, description: "timeStart"})
  timeStart: string

  @IsMilitaryTime() //HH:MM
  @ApiProperty({type: String, description: "timeFinish"})
  timeFinish: string
}           