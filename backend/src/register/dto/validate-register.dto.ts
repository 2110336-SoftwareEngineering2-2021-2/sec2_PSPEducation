import { IsIn } from 'class-validator'

export class ValidateRegisterDto {
  @IsIn(['approved', 'rejected'])
  status: string;
}