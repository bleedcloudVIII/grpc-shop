import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdersModule } from 'src/orders/orders.module';
import { OrdersItemsController } from './orders-items.controller';
import { OrderItem } from './orders-items.model';
import { OrdersItemsService } from './orders-items.service';

@Module({
  controllers: [OrdersItemsController],
  providers: [OrdersItemsService],
  imports: [
    SequelizeModule.forFeature([OrderItem]),
    OrdersModule
  ]
})
export class OrdersItemsModule {}
