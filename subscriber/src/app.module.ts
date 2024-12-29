import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import sequilzeObj from './database/sequilze.obj';

@Module({
  imports: [sequilzeObj, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
