import { Controller, Get, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    try {
      return this.userService.findAll();
    } catch (error) {
      throw new HttpException('Error finding users', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}