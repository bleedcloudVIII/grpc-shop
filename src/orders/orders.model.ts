import { Table, Model, Column, DataType, BelongsTo, HasMany } from 'sequelize-typescript'
import { OrderItem } from 'src/orders-items/orders-items.model';
import { User } from 'src/users/users.model';

interface CreateOrderAtts {
    user_id: number;
}

@Table({ tableName: 'orders'})
export class Order extends Model<Order, CreateOrderAtts> {

    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    user_id: number;

    @Column({type: DataType.INTEGER})
    price: number;

    @BelongsTo(() => User, 'fk_order_user_id')
    user: User

    @HasMany(() => OrderItem)
    orderItem: OrderItem

    
}
