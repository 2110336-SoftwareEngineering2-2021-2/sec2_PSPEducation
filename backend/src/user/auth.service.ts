import { Injectable, BadRequestException, NotFoundException} from "@nestjs/common";
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signin(email: string, password: string) {
    // find user 
    const user = await this.userService.findByEmail(email);
    if (!user) {
      // there is no email
      throw new BadRequestException("Email or Password is incorrect.")
    }

    // check password
    if (user.password !== password) {
      // password is incorrect
      throw new BadRequestException("Email or Password is incorrect.")
    }

    return user;
  }
}