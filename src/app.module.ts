import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersItemsModule } from './orders-items/orders-items.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { Product } from './products/products.model';
import { Order } from './orders/orders.model';
import { OrderItem } from './orders-items/orders-items.model';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.model';

@Module({
  imports: [
    // AuthModule,
    // UsersModule, 
    ProductsModule, 
    // OrdersModule, 
    // OrdersItemsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'bleedcloud',
      password: '01RFHfcm11@',
      database: 'grpc-shop',
      models: [User, Product, Order, OrderItem, Category],
      autoLoadModels: true
    }),
    CategoryModule,
  ],
  controllers: [],
  providers: [],

})
export class AppModule {}
