### BACKEND NESTJS

#### 0. Descargar Proyecto

```
git clone https://github.com/pedro-donoso/backend-nestjs.git
```

* Agregar carpeta node_modules:

```
npm install
```

#### 1. Crear un Proyecto NestJS

```
npm i -g @nestjs/cli
nest new backend-nestjs
```

opciones:
* npm

* Click derecho en carpeta creada backend-nestjs (abrir con windsurf)

* Creo proyecto github

#### 2. Creo carpeta controllers con archivo user.controller.ts 

#### 3. Elimino archivos innecesarios

* app.controller.spec.ts
* app.controller.ts
* app.service.ts

#### 4. Crear una carpeta services con un archivo user.service.ts

```
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
  ];

  findAll() {
    return this.users;
  }
}
```

#### 5. Crear un Controlador (src/controllers/user.controller.ts) y Manejo de errores

```
import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    try {
      return this.userService.findAll();
    } catch (error) {
      throw new HttpException('Error fetching users', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
```

#### 6. Actualizar el módulo principal (src/app.module.ts)

```
import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [User Controller],
  providers: [User Service],
})
export class AppModule {}
```

#### 7. Configurar CORS (main.ts)

```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Habilitar CORS
  await app.listen(3000);
}
bootstrap();
```

#### 8. Ejecutar el Backend (PUERTO 3000)

```
npm run start
```

#### 9. Verificar respuesta LOCAL (http://localhost:3000/users) de la API

![backend](https://github.com/user-attachments/assets/a46a73a9-5a72-4d41-aed4-29dc53f4544c)






