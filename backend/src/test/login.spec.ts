import { getModelToken, InjectModel } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';


@Injectable()
class LogInRef {
  constructor(@InjectModel('users') private readonly userModel: Model<any>) {}
  async signin(email: string, password: string) {
    // find user 
    const user = await this.userModel.findOne({email: email})
    if (!user) {
      // there is no email
      return "Email or Password is incorrect."
    }

    // check password
    if (user.password !== password) {
      // password is incorrect
      return "Email or Password is incorrect."
    }

    if (user.isAdmin) {
      return "Admin cannot login here"
    }
    return user;
  }
}

const mockRepository = {
  findOne(){
    return {}
  }
}

// Describes the funciton you are going to test
describe("LoginTest", () => {
  let authService : LogInRef;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [LogInRef, {provide: getModelToken('users'), useValue: mockRepository}]
    }).compile();

    authService = moduleRef.get<LogInRef>(LogInRef);
  })

  it("Test email", () => {
    expect(authService.signin("ttest@gmail.com", "aaaaa")).toBe("Error");
  });
});