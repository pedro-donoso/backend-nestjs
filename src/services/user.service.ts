import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  findAll() {
    return this.users;
  }
}
