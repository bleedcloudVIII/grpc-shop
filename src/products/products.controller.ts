import { Body, Controller, Get, Param, Post, Delete, Put, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { IProductsService } from 'src/proto/app/products.app.proto';
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { ProductIdRequest } from 'src/proto/products/ProductIdRequest';
import { ProductResponse } from 'src/proto/products/ProductResponse';
import { Empty } from 'src/proto/google/protobuf/Empty';

interface id {
    id: number;        
}

@Controller('/products/')
export class ProductsController {

    private productService: IProductsService;

    constructor(
        @Inject('Product_Package') private client: ClientGrpc,
        @InjectModel(Product) private readonly productsRepository: typeof Product
    ) {}

    onModuleInit() {
        this.productService = this.client.getService<IProductsService>('Products');
    }

    //Controller



    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productService.FindOne({id}); // { id: Long { low: 2, high: 0, unsigned: false } }
    }

    @Get()
    findAll() {
        let call: Empty;
        return this.productService.FindAll(call); 
    }

    @Post()
    create(@Body() dto: CreateProductDto) {
        return this.productService.Create(dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productService.Delete({id});
    }

    @Put('')
    update(@Body() dto: UpdateProductDto) {
        return this.productService.Update(dto);
    }

    //grpc methods

    @GrpcMethod('Products', 'Create')
    async Create(dto: CreateProductDto): Promise<ProductResponse> {
        return this.productsRepository.create(dto);
    }

    @GrpcMethod('Products', 'FindAll')
    async FindAll() {
        const products = await this.productsRepository.findAll();
        // console.log(products.map(product => {product.}));
        if(products) {
            return products;
        }
        else {
            return {};
        }
    }

    @GrpcMethod('Products', 'FindOne')
    async FindOne(id) {
        const convert_id = {id}.id.id.low;
        const product = await this.productsRepository.findOne({where: {id: convert_id}});
        if(product) {
            return product;
        }
        else{
            // return new HttpException('Product is not be find', HttpStatus.NOT_FOUND);
            // Не работает, надо что-то придумать
            return '{"message": "Product is not be find","code": 404}';
        }
    }

    @GrpcMethod('Products', 'Delete')
    async Delete(id) {
        const convert_id = {id}.id.id.low;
        await this.productsRepository.destroy({where: {id: convert_id}});
        return HttpStatus.OK;
    }

    @GrpcMethod('Products', 'Update')
    async Update(dto: UpdateProductDto) {
        await this.productsRepository.update({...dto}, {where: {id: dto.id}});
        const product = await this.productsRepository.findOne({where: {id: dto.id}});
        return product;
    }   
}
