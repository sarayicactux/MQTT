import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MQTTModule } from '../../mqtt.module';

@Module({
  imports: [MQTTModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
