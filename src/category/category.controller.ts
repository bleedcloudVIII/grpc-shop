import { Controller, Param, Body, Get, Put, Post, Delete, Inject } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ICategoryService } from 'src/proto/app/category.app.proto'
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { throws } from 'assert';

@Controller('/category/')
export class CategoryController {

    // constructor(private readonly categoryService: CategoryService) {}

    // private svc: ICategoryService;

    @Inject(CategoryService)
    // private readonly client: ClientGrpc;
    private readonly service: CategoryService;

    // public onModuleInit(): void {
    //     this.svc = this.client.getService<ICategoryService>('CategoryService');
    // }

    // @Get('')
    @GrpcMethod('CategoryService', '')
    findAll() {
        // return this.categoryService.findAll();
        // return this.service.FindAll();
        return this.service.findAll();
    }

    // @Get(':category_id')
    @GrpcMethod('CategoryService', ':category_id')
    findOne(@Param('category_id') category_id: number) {
        // return this.categoryService.findOne(category_id);
        // return this.svc.FindOne({categoryId: category_id});
        return this.service.findOne(category_id);
    }

    // @Post('')
    @GrpcMethod('CategoryService', '')
    create(@Body() dto: CreateCategoryDto) {
        // return this.categoryService.create(dto);
        return this.service.create(dto);
    }

    // @Put('')
    @GrpcMethod('CategoryService', '')
    update(@Body() dto: UpdateCategoryDto) {
        // return this.categoryService.update(dto);
        return this.service.update(dto);
    }

    @GrpcMethod('CategoryService', ':category_id')
    delete(@Param('category_id') category_id: number) {
        // return this.categoryService.delete(category_id);
        return this.service.delete(category_id);
    }

}
