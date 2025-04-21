import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'; //on importe serve-static
import { join } from 'path'; //permet de trouver les chemins des fichiers en fonction de l'OS
import { MesuresModule } from './mesures/mesures.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({ //on sert browser (crée après le build)
      rootPath: join(__dirname, '..', 'web-app/browser'),
      // serveRoot: '/static/',
    }),
    MesuresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
