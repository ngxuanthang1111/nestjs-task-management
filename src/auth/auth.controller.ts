import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentailsDTO: AuthCredentialsDTO,
  ): Promise<void> {
    return this.authService.signUp(authCredentailsDTO);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentailsDTO: AuthCredentialsDTO,
  ): Promise<JwtPayload> {
    return this.authService.signIn(authCredentailsDTO);
  }
}
