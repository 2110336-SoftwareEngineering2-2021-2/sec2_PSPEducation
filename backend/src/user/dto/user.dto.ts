import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class UserDto {
  @Expose()
  @ApiProperty({type: String, description: "id"})
  id: string;

  @Expose()
  type: string;

  @Expose()
  isAdmin: boolean;

  @Expose()
  firstname: string;

  @Expose()
  lastname: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  phoneNumber: string;

  @Expose()
  displayName: string;

  @Expose()
  birthdate: string;

  @Expose()
  gender: string;

  @Expose()
  educationalLevel: number;

  @Expose()
  picture: String[];
  
  @Expose()
  citizenId: string;
  
  @Expose()
  citizenImage: string;

  @Expose()
  dateTimeCreated: Date;

  @Expose()
  dateTimeUpdated: Date;
}