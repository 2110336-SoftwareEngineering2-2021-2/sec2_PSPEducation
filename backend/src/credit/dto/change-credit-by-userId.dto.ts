import { Expose } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class ChangeCreditByUserIdDto {

  @Expose()
  @IsInt()
  amountToChange: number;

  @Expose()
  @IsInt()
  type: number;


  @Expose()
  @IsString()
  @IsOptional()
  courseId: string;
}