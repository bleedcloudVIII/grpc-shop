import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.model';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product) private readonly productRepository: typeof Product) {}

    async create(dto: CreateProductDto) {
        return this.productRepository.create(dto);
    }

    async findAll() {
        return this.productRepository.findAll();
    }

    async findById(id: number) {
        return this.productRepository.findOne({where: {id}});
    }

    async delete(id: number) {
        await this.productRepository.destroy({where: {id}});
        return HttpStatus.OK;
    }

    async update(dto: UpdateProductDto) {
        await this.productRepository.update({...dto}, {where: {id: dto.id}});
        const product = await this.productRepository.findOne({where: {id: dto.id}});
        return product;
    }   

}
