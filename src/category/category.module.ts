import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryController } from './category.controller';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path/posix';

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryService,
  ],
  imports: [
    SequelizeModule.forFeature([Category]),
    ClientsModule.register([
      {
        name: 'Category_Package',
        transport: Transport.GRPC,
        options: {
          package: 'categories',
          protoPath: join( __dirname, '../../src/category/proto/category.proto'),
        }
      }
    ])
  ]
})
export class CategoryModule {}
