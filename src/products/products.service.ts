import { HttpStatus, Injectable, Controller } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.model';
import { UpdateProductDto } from './dto/update-product.dto';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductResponse } from 'src/proto/products/ProductResponse';

@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product) private readonly productRepository: typeof Product) {}

    @GrpcMethod('Products', 'Create')
    async Create(dto: CreateProductDto): Promise<ProductResponse> {
        return this.productRepository.create(dto);
    }

    @GrpcMethod('Products', 'FindAll')
    async FindAll() {
        return this.productRepository.findAll();
    }

    @GrpcMethod('Products', 'FindOne')
    async FindOne(id: number) {
        return this.productRepository.findOne({where: {id}});
    }

    @GrpcMethod('Products', 'Delete')
    async Delete(id: number) {
        await this.productRepository.destroy({where: {id}});
        return HttpStatus.OK;
    }

    @GrpcMethod('Products', 'Update')
    async Update(dto: UpdateProductDto) {
        await this.productRepository.update({...dto}, {where: {id: dto.id}});
        const product = await this.productRepository.findOne({where: {id: dto.id}});
        return product;
    }   

}
