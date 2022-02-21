import { Type } from 'class-transformer';
import { IsString, IsInt, Min, Max, IsArray, ValidateNested} from 'class-validator'

export class CreateReportDto {
  @IsString()
  userId: string;

  @IsString()
  title: string;

  @IsInt()
  @Min(0)
  @Max(2)
  type: number;

  @IsString()
  detail: string;

  @IsArray()
  @IsString({ each: true })
  picture: string[];

}                             