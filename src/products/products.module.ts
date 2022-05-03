import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsController } from './products.controller';
import { Product } from './products.model';
import { ProductsService } from './products.service';
import { join } from 'path/posix';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [ 
    SequelizeModule.forFeature([Product]),
    ClientsModule.register([{
      name: 'Product_Package',
      transport: Transport.GRPC,
      options: {
        package: 'products',
        protoPath: join( __dirname, '../../src/products/proto/product.proto'),
      }
    }])
  ]
})
export class ProductsModule {}
