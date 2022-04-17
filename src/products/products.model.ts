import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Category } from 'src/category/category.model';

interface CreateProductAtts {
    name: string;
    cost: number;
}

@Table({tableName: 'products'})  
export class Product extends Model<Product, CreateProductAtts> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    cost: number;

    @HasMany(() => Category)
    category: Category
}