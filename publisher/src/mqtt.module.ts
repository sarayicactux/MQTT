import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MQTT_PUBLISHER',
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://localhost:1883',
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class MQTTModule {}
