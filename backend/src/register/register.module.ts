import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Register, RegisterSchema } from './register.schema';
import { AdminRegisterController } from './adminregister.controller';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'registers', schema: RegisterSchema }])],
  controllers: [RegisterController, AdminRegisterController],
  providers: [RegisterService]
})
export class RegisterModule {
  
}
