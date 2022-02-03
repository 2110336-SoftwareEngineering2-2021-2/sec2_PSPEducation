import { IsIn, IsMilitaryTime } from 'class-validator'

export class TimeSlot {
  @IsIn(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])
  day: string;

  @IsMilitaryTime() //HH:MM
  timeStart: string

  @IsMilitaryTime() //HH:MM
  timeFinish: string
}           