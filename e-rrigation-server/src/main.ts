import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration de Swagger (informations sur la page)
  const config = new DocumentBuilder()
    .setTitle('API E-rrigation')
    .setDescription('Documentation de l\'API pour le projet E-rrigation')
    .setVersion('1.0')
    .addTag('mesures') // Ajout d'un tag pour les mesures
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger sera accessible sur /api

  
  await app.listen(process.env.PORT ?? 3001);
  
}
bootstrap();
