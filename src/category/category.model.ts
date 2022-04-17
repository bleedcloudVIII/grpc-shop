import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Product } from 'src/products/products.model';

interface CreateCategoryAtts {
    name: string;
}

@Table({tableName: 'category'})
export class Category extends Model<Category> {

    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @BelongsTo(() => Product)
    category: Category
}