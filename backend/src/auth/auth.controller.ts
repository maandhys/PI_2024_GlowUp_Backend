import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './google-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard) // Aplica a guarda de autenticação Google
  async googleAuth() {
    // Esta rota vai redirecionar para o Google para o login
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect() {
    // Após a autenticação, essa rota irá tratar a resposta do Google
    return { message: 'Usuário autenticado com sucesso' };
  }
}
