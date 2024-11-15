import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [UserModule],
  providers: [AuthService, GoogleStrategy]
})
export class AuthModule {}
