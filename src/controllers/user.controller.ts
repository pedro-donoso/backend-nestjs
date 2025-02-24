// importo el servicio UserService para poder usar sus metodos
import { Controller, Get, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

// Creo controlador para manejar las peticiones GET a /users
@Controller('users')
export class UserController {

  // Inyectamos el servicio UserService para poder usar sus metodos
  constructor(private readonly userService: UserService) {}

  // Defino la peticion GET a realizar para obtener todos los usuarios
  @Get()
  findAll() {
    try {
      // Invoco el metodo findAll del servicio UserService
      return this.userService.findAll();
    } catch (error) {
      // Si ocurre un error, lo manejo y lanzo una excepcion HTTP
      throw new HttpException('Error finding users', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}