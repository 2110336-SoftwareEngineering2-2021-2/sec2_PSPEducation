import { getModelToken, InjectModel } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../src/user/user.schema';
import { mockLogInFunction } from './mockLogInFunction'


// @Injectable()
// class LogInRef {
//   constructor(@InjectModel('users') private readonly userModel: Model<any>) {}
//   async signin(email: string, password: string) {
//     // find user 
//     const user = await this.userModel.findOne({email: email})
//     console.log(user)
//     if (!user) {
//       // there is no email
//       return "Email or Password is incorrect."
//     }

//     // check password
//     if (user.password !== password) {
//       // password is incorrect
//       return "Email or Password is incorrect."
//     }

//     if (user.isAdmin) {
//       return "Admin cannot login here"
//     }
//     return "Valid";
//   }
// }

// const mockRepository = {
//   findOne(email: string){
//     const user = new User;
//     user.password = 'aaa'
//     return null
//   }
// }

// const VirtualLogInFunction = (email: string, password: string): string => {
//   // find user 
//   const user = mockRepository.findOne(email)
//   console.log(user)
//   if (!user) {
//     // there is no email
//     return "Email or Password is incorrect."
//   }

//   // check password
//   if (user.password !== password) {
//     // password is incorrect
//     return "Email or Password is incorrect."
//   }

//   if (user.isAdmin) {
//     return "Admin cannot login here"
//   }
//   return "Valid";
// }

// Describes the funciton you are going to test
describe("LoginTest", () => {
  it("Test email", () => {
    expect(mockLogInFunction("ttest@gmail.com", 'a')).toBe("Email or Password is incorrect.");
  });
});