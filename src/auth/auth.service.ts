import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import { UserRepository } from './user.repository';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentailsDTO: AuthCredentialsDTO): Promise<void> {
    return this.userRepository.signUp(authCredentailsDTO);
  }

  async signIn(authCredentailsDTO: AuthCredentialsDTO): Promise<JwtPayload> {
    const username = await this.userRepository.validateUserPassword(
      authCredentailsDTO,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid credentails');
    }

    const payload = { username };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }
}
