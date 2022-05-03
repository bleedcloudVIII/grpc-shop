import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path/posix';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: [
        'categories',
        // 'users',
        'products',
        // 'order-items',
        // 'orders',
        // 'auth'
      ],
      protoPath: [
        join(__dirname, '../src/category/proto/category.proto'),
        join(__dirname, '../src/users/proto/user.proto'),
        join(__dirname, '../src/products/proto/product.proto'),
        join(__dirname, '../src/orders-items/proto/order-item.proto'),
        join(__dirname, '../src/orders/proto/order.proto'),
        join(__dirname, '../src/auth/proto/auth.proto')
      ]
    }
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
