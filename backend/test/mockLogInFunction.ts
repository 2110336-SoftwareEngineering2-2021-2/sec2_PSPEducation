import { User } from "../src/user/user.schema";


const mockRepository = {
  findOne(email: string){
    const user = new User;
    user.password = 'aaa'
    return null
  }
}

export const mockLogInFunction = (email: string, password: string): string => {
  // find user 
  const user = mockRepository.findOne(email)
  console.log(user)
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
  return "Valid";
}