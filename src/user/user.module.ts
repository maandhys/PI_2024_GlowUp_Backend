import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Userchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: Userchema }])],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
