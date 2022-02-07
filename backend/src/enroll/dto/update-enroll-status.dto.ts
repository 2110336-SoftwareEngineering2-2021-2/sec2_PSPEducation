import { IsIn } from 'class-validator'

export class UpdateEnrollStatusDto{
  @IsIn(["approved", "rejected"])
  status: string
}