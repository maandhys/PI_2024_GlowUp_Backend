import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly UserService: UserService,
  ) {
    super({
      clientID: process.env.clientID,
      clientSecret:process.env.clientSecret,
      callbackURL: process.env.callbackURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    const { id, emails, displayName } = profile;

    // Verifica se o usuário já existe
    let user = await this.UserService.findByGoogleId(id);
    if (!user) {
      // Se não existir, cria o novo usuário
      user = await this.UserService.create(id, emails[0].value, displayName);
    }

    return user; // Retorna os dados do usuário autenticado
  }
}
