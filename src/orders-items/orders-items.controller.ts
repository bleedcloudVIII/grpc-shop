import { Controller, Body, Put, Get, Post, Delete, Param } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-orderItem.dto';
import { UpdateOrderItamDto } from './dto/update-orderItem.dto';
import { OrdersItemsService } from './orders-items.service';

@Controller('orders-items')
export class OrdersItemsController {

    constructor(private readonly orderItemService: OrdersItemsService) {}

    @Get('/ByOrderId/:order_id')
    findAllByOrderId(@Param('order_id') order_id: number) {
        return this.orderItemService.findAllByOrderId(order_id);
    }

    @Get(':orderItem_id')
    findOneByOrderItemId(@Param('orderItem_id') orderItem_id: number) {
        return this.orderItemService.findOneByOrderItemId(orderItem_id);
    }

    @Delete(':orderItem_id')
    delete(@Param('orderItem_id') orderItem_id: number) {
        return this.orderItemService.delete(orderItem_id);
    }

    @Post()
    create(@Body() dto: CreateOrderItemDto) {
        return this.orderItemService.create(dto);
    }

    @Put()
    update(@Body() dto: UpdateOrderItamDto) {
        return this.orderItemService.update(dto);
    }
}
