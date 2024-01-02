import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Users from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly user_repository: Repository<Users>,
  ) {}

  findAll() {
    return [];
  }
  findUserById(id: number) {
    return {
      id,
      name: 'amir',
      username: 'amir',
    };
  }
  findUserByUsername(username: string) {
    return {
      id: 1,
      name: 'amir',
      username,
    };
  }
}
