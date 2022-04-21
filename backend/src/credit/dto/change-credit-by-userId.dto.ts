import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class ChangeCreditByUserIdDto {

  @Expose()
  @IsInt()
  @ApiProperty({type: Number, description: "amountToChange"})
  amountToChange: number;

  @Expose()
  @IsInt()
  @ApiProperty({type: Number, description: "type"})
  type: number;


  @Expose()
  @IsString()
  @IsOptional()
  @ApiProperty({type: String, description: "courseId"})
  courseId: string;
}