import { Controller, Get, Post, Body, Param, Session, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CreateRegisterDto } from 'src/register/dto/create-register.dto';
import { SignInUserDto } from './dto/signin-user.dto';
import { AuthGuard } from 'src/guard/auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { UserDto } from './dto/user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Controller('auth')
@Serialize(UserDto)
export class UserController {
  constructor(private userService: UserService,
              private authService: AuthService){}

  @Get("/user")
  getAllUser(){
    return this.userService.findAll()
  }
 
  @Get("/user/:id")
  getUserById(@Param("id") id: string){
    return this.userService.findById(id)
  }

  @Get("/student")
  getAllStudent(){
    return this.userService.findByType("student")
  }

  @Get("/tutor")
  getAllTutor(){
    return this.userService.findByType("tutor")
  }

  @Post('/signin')
  async signin(@Body() body: SignInUserDto, @Session() session: any){
    const email = body.email
    const password = body.password
    const user = await this.authService.signin(email, password)
    // save session
    session.userId = user._id;
    return user
  }

  @Post('/signout')
  signOut(@Session() session: any) {
    // clear session
    session.userId = null;
  }

  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoAmI(@Session() session: any, @CurrentUser() user: UserDto) {
    return user;
  }

}