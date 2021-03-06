import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BeersModule } from './beers/beers.module';
import {UsersModule} from "./users/users.module";

@Module({
  imports: [BeersModule,UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
