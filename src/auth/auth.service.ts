import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly UserService: UserService) {}

  async validateUserByGoogleId(googleId: string) {
    return this.UserService.findByGoogleId(googleId);
  }
}
