// importo el decorator Injectable de @nestjs/common para poder usarlo en esta clase
import { Injectable } from '@nestjs/common';

// Creo la clase UserService para poder usarla en el controlador
@Injectable()
export class UserService {
  // Atributos privados
  private users = [
    {
      // Atributos de cada usuario
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

  // Metodo para obtener todos los usuarios
  findAll() {
    return this.users;
  }
}
