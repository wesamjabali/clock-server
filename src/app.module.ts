import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClockModule } from './clock/clock.module';

@Module({
  imports: [ClockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
