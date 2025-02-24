import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

// AppModule es el modulo principal de la aplicacion, donde se configuran los controladores, los proveedores y los imports
@Module({
  // Los imports son otros modulos que se necesitan para que este modulo funcione
  imports: [],
  // Los controllers son los controladores de la aplicacion, donde se manejan las peticiones HTTP
  controllers: [UserController],
  // Los providers son los proveedores de la aplicacion, como los servicios
  providers: [UserService],
})
export class AppModule {}
