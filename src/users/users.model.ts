import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { Order } from 'src/orders/orders.model';

interface CreateUserAtts {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, CreateUserAtts> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: true})
    email: string;

    @Column({type: DataType.STRING, allowNull: true})
    password: string;

    // @BelongsTo(()=>Order, 'fk_order_user_id')
    // user: User
}
