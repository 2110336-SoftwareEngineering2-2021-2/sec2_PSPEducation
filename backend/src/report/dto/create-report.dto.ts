import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsInt, Min, Max, IsArray, ValidateNested} from 'class-validator'

export class CreateReportDto {
  @IsString()
  @ApiProperty({type: String, description: 'userId'})
  userId: string;

  @IsString()
  @ApiProperty({type: String, description: 'title'})
  title: string;

  @IsInt()
  @Min(0)
  @Max(2)
  @ApiProperty({type: Number, description: 'type'})
  type: number;

  @IsString()
  @ApiProperty({type: String, description: 'detail'})
  detail: string;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({type: [String], description: 'picture'})
  picture: string[];

}                             