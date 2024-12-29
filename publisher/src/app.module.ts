import { Module } from '@nestjs/common';
import { UserModule } from './application/user/user.module';
import { MQTTModule } from './mqtt.module';

@Module({
  imports: [MQTTModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
