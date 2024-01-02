import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  register(LoginDto: LoginDto) {
    return 'This action adds a new auth';
  }

  login() {
    return 'This action adds a new auth Login';
  }
}
