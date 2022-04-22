import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateUserPasswordDto {
  @IsString()
  @ApiProperty({type: String, description: "oldPassword"})
  oldPassword: string;

  @IsString()
  @ApiProperty({type: String, description: "newPassword"})
  newPassword: string;

  @IsString()
  @ApiProperty({type: String, description: "confirmNewPassword"})
  confirmNewPassword: string;
}