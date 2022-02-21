import { Controller, Get, Post, Body, Param, Session, UseGuards, BadRequestException, Patch, ForbiddenException } from '@nestjs/common';
import { CurrentUser } from './decorators/current-user.decorator';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { checkUserIdWithSession } from '../utils';
// Service
import { UserService } from './user.service';
import { AuthService } from './auth.service';
// Dto
import { UserDto } from './dto/user.dto';
import { CreateRegisterDto } from 'src/register/dto/create-register.dto';
import { SignInUserDto } from './dto/signin-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
// Guard
import { AuthGuard } from 'src/guard/auth.guard';
import { AdminGuard } from 'src/guard/admin.guard';
// Schema
import { User } from './user.schema';

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

  @Patch("/user/:id")
  @UseGuards(AuthGuard)
  updateUser(@Param("id") id: string, @Body() body: Partial<User>, @Session() session: any) {
    checkUserIdWithSession(id, session.userId);
    return this.userService.updateUser(id, body);
  }

  @Patch("user/:id/password")
  @UseGuards(AuthGuard)
  updateUserPassword(@Param("id") id: string, @Body() body: UpdateUserPasswordDto, @Session() session: any){
    checkUserIdWithSession(id, session.userId);
    return this.userService.updateUserPassword(id, body)
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
    if (session.userId) {
      throw new BadRequestException('There is already logged in user')
    }
    const email = body.email
    const password = body.password
    const user = await this.authService.signin(email, password)
    // save session
    session.userId = user._id;
    return user
  }

  @Post('/admin/signin')
  async adminSignin(@Body () body: SignInUserDto, @Session() session: any) {
    const email = body.email
    const password = body.password
    const user = await this.authService.signinAdmin(email, password)
    // save session
    session.userId = user._id;
    return user
  }

  @Post('/signout')
  signOut(@Session() session: any) {
    if (!session.userId) {
      throw new BadRequestException("No one is logged in, so you cannot log out")
    }
    // clear session
    session.userId = null;
  }

  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoAmI(@Session() session: any, @CurrentUser() user: UserDto) {
    return user;
  }

  @Get('/checkAdmin')
  @UseGuards(AdminGuard)
  checkAdmin(@Session() session: any, @CurrentUser() user: UserDto) {
    return "YOU ARE ADMIN!!!";
  }
}