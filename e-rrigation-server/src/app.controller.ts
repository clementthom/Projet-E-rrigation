import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api') //le nest répond maintenant sur /api
  getHello(): string {
    return this.appService.getHello();
  }
}
