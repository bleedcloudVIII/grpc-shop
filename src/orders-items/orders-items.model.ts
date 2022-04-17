import { Table, Column, Model, DataType, BelongsToMany, BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { Order } from "src/orders/orders.model";

interface CreateOrderItemAtts {
    order_id: number;
    product_id: number;
    product_count: number;
    product_price: number;
}
@Table({tableName: 'ordersItems'})
export class OrderItem extends Model<OrderItem, CreateOrderItemAtts> {

    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @ForeignKey(() => Order)
    @Column({type: DataType.INTEGER, allowNull: false})
    order_id: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    product_id: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    product_count: number;
    
    @Column({type: DataType.INTEGER})
    product_price: number;

    @BelongsTo(() => Order)
    order: Order
}


