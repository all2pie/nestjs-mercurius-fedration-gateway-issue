import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  MercuriusGatewayDriverConfig,
  MercuriusGatewayDriver,
} from '@nestjs/mercurius';
import { GatewayController } from './gateway.controller';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusGatewayDriverConfig>({
      driver: MercuriusGatewayDriver,
      subscription: true,
      gateway: {
        // It works fine if i comment any one service
        services: [
          { name: 'service-1', url: 'http://localhost:3000/graphql' },
          { name: 'service-2', url: 'http://localhost:3002/graphql' },
        ],
      },
    }),
  ],
  controllers: [GatewayController],
  providers: [],
})
export class GatewayModule {}
