import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './controllers/clients.controller';
import { ClientsService } from './services/clients.service';

@Module({
  imports: [],
  controllers: [AppController, ClientsController],
  providers: [AppService, ClientsService],
})
export class AppModule {}
