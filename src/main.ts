import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Main es el punto de entrada de la aplicacion, donde se configuran los modulos, los controladores y los proveedores
async function bootstrap() {
  // Creo la aplicacion NestJS
  const app = await NestFactory.create(AppModule);

  // Habilito CORS
  app.enableCors();

  // Inicio la aplicacion
  await app.listen(process.env.PORT ?? 3000);
}

// Llamada a la funcion bootstrap
bootstrap();
