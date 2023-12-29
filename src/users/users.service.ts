import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
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
