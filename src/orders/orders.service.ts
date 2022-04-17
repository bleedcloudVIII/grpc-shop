import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './orders.model';

@Injectable()
export class OrdersService {

    constructor(@InjectModel(Order) private readonly orderRepository: typeof Order) {}

    async create(user_id: number) {
        return this.orderRepository.create(user_id);
    }

    async deleteByOrderId(order_id: number) {
        await this.orderRepository.destroy({where: {id: order_id}});
        return HttpStatus.OK;
    }

    async findAll() {
        return this.orderRepository.findAll();
    }

    async findAllByUserId(user_id: number) {
        return this.orderRepository.findAll({where: {user_id: user_id}})
    }

    async findOneByOrderId(order_id: number) {
        return this.orderRepository.findOne({where: {id: order_id}});
    }

    async UpdatePrice(newPrice: number, order_id: number) {
        await this.orderRepository.update({price: newPrice},{where: {id: order_id}});
        return HttpStatus.OK;
    }


}
