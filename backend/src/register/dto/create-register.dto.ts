import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsInt, Min, Max, IsDateString, IsIn, Length, IsBase64} from 'class-validator'
import { IsThaiCitizenId } from 'src/custom-validator/isThaiCitizenId';
import { IsThaiPhoneNumber } from 'src/custom-validator/isThaiPhoneNumber';

export class CreateRegisterDto {
  @IsIn(["student", "tutor"])
  @ApiProperty({type: String, description: "type"})
  type: string;

  @IsString()
  @Length(1, 45)
  @ApiProperty({type: String, description: "firstname"})
  firstname: string;

  @IsString()
  @Length(1, 45)
  @ApiProperty({type: String, description: "lastname"})
  lastname: string;

  @IsString()
  @Length(8, 16)
  @ApiProperty({type: String, description: "username"})
  username: string;

  @IsString()
  @ApiProperty({type: String, description: "password"})
  password: string; /* !!! check hashed ? !!! */

  @IsEmail()
  @ApiProperty({type: String, description: "email"})
  email: string; 

  @IsString()
  @IsThaiPhoneNumber({message: 'Invalid Phone Number'})
  @ApiProperty({type: String, description: "phoneNumber"})
  phoneNumber: string;

  @IsString()
  @Length(1, 45)
  @ApiProperty({type: String, description: "displayName"})
  displayName: string;

  @IsDateString()
  @ApiProperty({type: String, description: "birthdate"})
  birthdate: Date;

  @IsIn(["male", "female", "other"])
  @ApiProperty({type: String, description: "gender"})
  gender: string;

  @IsInt()
  @Min(0)
  @Max(8)
  @ApiProperty({type: Number, description: "educationalLevel"})
  educationalLevel: number;

  @IsBase64()
  @ApiProperty({type: String, description: "picture"})
  picture: string;

  @IsString()
  @IsThaiCitizenId({message: 'Invalid Citizen ID'})
  @ApiProperty({type: String, description: "citizenId"})
  citizenId: string;

  @IsBase64()
  @ApiProperty({type: String, description: "citizenImage"})
  citizenImage: string;
}                             