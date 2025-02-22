import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      userId: 1,
      username: 'pedro',
      apellido: 'donoso',
    },
    {
      userId: 2,
      username: 'maria',
      apellido: 'gala',
    },
  ];

  findAll() {
    return this.users;
  }
}
