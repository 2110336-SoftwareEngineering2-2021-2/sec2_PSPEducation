import { IsIn } from "class-validator";

export class ChangeCreditHistoryStatusByIdDto {

  @IsIn(['completed', 'canceled'])
  status: string;
}