import { Controller, Param, Body, Get, Put, Post, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) {}

    @Get('')
    findAll() {
        return this.categoryService.findAll();
    }

    @Get(':category_id')
    findOne(@Param('category_id') category_id: number) {
        return this.categoryService.findOne(category_id);
    }

    @Post('')
    create(@Body() dto: CreateCategoryDto) {
        return this.categoryService.create(dto);
    }

    @Put('')
    update(@Body() dto: UpdateCategoryDto) {
        return this.categoryService.update(dto);
    }

    @Delete(':category_id')
    delete(@Param('category_id') category_id: number) {
        return this.categoryService.delete(category_id);
    }

}
