import { Controller, Get, Post, Body, Param, Session, UseGuards, BadRequestException, Patch, ForbiddenException } from '@nestjs/common';
import { CurrentUser } from './decorators/current-user.decorator';
import { Serialize } from '../interceptors/serialize.interceptor';
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
import { AuthGuard } from '../guard/auth.guard';
import { AdminGuard } from '../guard/admin.guard';
// Schema
import { User } from './user.schema';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
@Serialize(UserDto)
export class UserController {
  constructor(private userService: UserService,
              private authService: AuthService){}

  @Get("/user")
  @ApiOperation({summary: "Get all User", tags: ["User"]})
  @ApiOkResponse({description: "Return list of user"})
  getAllUser(){
    return this.userService.findAll()
  }
 
  @Get("/user/:id")
  @ApiOperation({summary: "Get User By Id", tags: ["User"]})
  @ApiOkResponse({description: "Return user"})
  getUserById(@Param("id") id: string){
    return this.userService.findById(id)
  }

  @Patch("/user/:id")
  @ApiOperation({summary: "Update User", tags: ["User"]})
  @ApiCreatedResponse({description: "Return updated user"})
  @ApiBody({type: User})
  @UseGuards(AuthGuard)
  updateUser(@Param("id") id: string, @Body() body: Partial<User>, @Session() session: any) {
    checkUserIdWithSession(id, session.userId);
    return this.userService.updateUser(id, body);
  }

  @Patch("user/:id/password")
  @UseGuards(AuthGuard)
  @ApiOperation({summary: "Update User Password", tags: ["User"]})
  @ApiCreatedResponse({description: "Return updated user"})
  @ApiBody({type: UpdateUserPasswordDto})
  updateUserPassword(@Param("id") id: string, @Body() body: UpdateUserPasswordDto, @Session() session: any){
    checkUserIdWithSession(id, session.userId);
    return this.userService.updateUserPassword(id, body)
  }
  
  @Get("/student")
  @ApiOperation({summary: "Get all Student", tags: ["User"]})
  @ApiOkResponse({description: "Return list of student"})
  getAllStudent(){
    return this.userService.findByType("student")
  }

  @Get("/tutor")
  @ApiOperation({summary: "Get all Tutor", tags: ["User"]})
  @ApiOkResponse({description: "Return list of tutor"})
  getAllTutor(){
    return this.userService.findByType("tutor")
  }

  @Post('/signin')
  @ApiOperation({summary: "User Sign-In", tags: ["User"]})
  @ApiCreatedResponse({description: "Return Sign-in User"})
  @ApiBody({type: SignInUserDto})
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
  @ApiOperation({summary: "Admin Sign-In", tags: ["User"]})
  @ApiCreatedResponse({description: "Return Sign-in User"})
  @ApiBody({type: SignInUserDto})
  async adminSignin(@Body () body: SignInUserDto, @Session() session: any) {
    const email = body.email
    const password = body.password
    const user = await this.authService.signinAdmin(email, password)
    // save session
    session.userId = user._id;
    return user
  }

  @Post('/signout')
  @ApiOperation({summary: "User Logout", tags: ["User"]})
  @ApiCreatedResponse({description: "Return Logout User"})
  signOut(@Session() session: any) {
    if (!session.userId) {
      throw new BadRequestException("No one is logged in, so you cannot log out")
    }
    // clear session
    session.userId = null;
  }

  @Get('/whoami')
  @UseGuards(AuthGuard)
  @ApiOperation({summary: "Who am i", tags: ["User"]})
  @ApiOkResponse({description: "Return current User"})
  whoAmI(@Session() session: any, @CurrentUser() user: UserDto) {
    return user;
  }

  @Get('/checkAdmin')
  @UseGuards(AdminGuard)
  @ApiOperation({summary: "Admin or not", tags: ["User"]})
  @ApiOkResponse({description: "YOU ARE ADMIN!!!"})
  checkAdmin(@Session() session: any, @CurrentUser() user: UserDto) {
    return "YOU ARE ADMIN!!!";
  }
}