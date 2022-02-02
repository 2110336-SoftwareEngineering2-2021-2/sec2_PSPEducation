import { IsString, IsEmail, IsInt, Min, Max, IsDateString, IsIn, Length, IsBase64} from 'class-validator'
import { IsThaiCitizenId } from 'src/custom-validator/isThaiCitizenId';
import { IsThaiPhoneNumber } from 'src/custom-validator/isThaiPhoneNumber';

export class CreateRegisterDto {
  @IsIn(["student", "tutor"])
  type: string;

  @IsString()
  @Length(1, 45)
  firstname: string;

  @IsString()
  @Length(1, 45)
  lastname: string;

  @IsString()
  @Length(8, 16)
  username: string;

  @IsString()
  password: string; /* !!! check hashed ? !!! */

  @IsEmail()
  email: string; 

  @IsString()
  @IsThaiPhoneNumber({message: 'Invalid Phone Number'})
  phoneNumber: string;

  @IsString()
  @Length(1, 45)
  displayName: string;

  @IsDateString()
  birthdate: Date;

  @IsIn(["male", "female", "other"])
  gender: string;

  @IsInt()
  @Min(0)
  @Max(8)
  educationalLevel: number;

  @IsBase64()
  picture: string;

  @IsString()
  @IsThaiCitizenId({message: 'Invalid Citizen ID'})
  citizenId: string;

  @IsBase64()
  citizenImage: string;
}                             