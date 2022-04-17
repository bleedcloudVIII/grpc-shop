import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productsService.findById(id);
    }

    @Get('')
    findAll() {
        return this.productsService.findAll();
    }

    @Post()
    create(@Body() dto: CreateProductDto) {
        return this.productsService.create(dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productsService.delete(id);
    }

    @Put('')
    update(@Body() dto: UpdateProductDto) {
        return this.productsService.update(dto);
    }
}
