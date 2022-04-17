import { Controller, Get, Put, Delete, Post, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    
    constructor(private readonly ordersService: OrdersService) {}

    @Get('')
    findAll() {
        return this.ordersService.findAll();
    }

    @Get(':order_id')
    findOneByOrderId(@Param('order_id') id: number) {
        return this.ordersService.findOneByOrderId(id);
    }

    @Get('/ByUserId/:user_id')
    findAllByUserId(@Param('user_id') id: number) {
        return this.ordersService.findAllByUserId(id);
    }

    @Delete(':order_id')
    delete(@Param('order_id') id: number) {
        return this.ordersService.deleteByOrderId(id);
    }

    @Post(':user_id')
    create(@Param('user_id') id: number) {
        return this.ordersService.create(id);
    }
}
