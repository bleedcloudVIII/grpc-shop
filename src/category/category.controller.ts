import { Controller, Param, Body, Get, Put, Post, Delete, Inject, HttpStatus } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { ICategoryService } from '../proto/app/category.app.proto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CategoryResponse } from 'src/proto/categories/CategoryResponse';
import { CategoryIdRequest } from 'src/proto/categories/CategoryIdRequest';
// import { UpdateCategoryRequest } from 'src/proto/categories/UpdateCategoryRequest';
import { DeleteCategory } from 'src/proto/categories/DeleteCategory';

@Controller('/category/')
export class CategoryController {

    private categoryService: ICategoryService;

    constructor(
        @Inject('Category_Package') private client: ClientGrpc,
        @InjectModel(Category) private readonly categoryRepository: typeof Category
    ) {}

    onModuleInit() {
        this.categoryService = this.client.getService<ICategoryService>('Category');
    }

    //Controller

    @Get('')
    findAll() {
        return this.categoryService.FindAll();
    }

    @Get(':category_id')
    findOne(@Param('category_id') category_id: CategoryIdRequest) {
        return this.categoryService.FindOne(category_id);
    }

    @Post('')
    create(@Body() dto: CreateCategoryDto) {
        return this.categoryService.Create(dto);
    }

    @Put('')
    update(@Body() dto: UpdateCategoryDto) {
        return this.categoryService.Update(dto);
    }

    @Delete(':category_id')
    delete(@Param('category_id') category_id: CategoryIdRequest) {
        return this.categoryService.Delete(category_id);
    }

    //grpc methods 

    @GrpcMethod('Category', 'FindOne')
    async FindOne(category_id: number): Promise<CategoryResponse> {
        return this.categoryRepository.findOne({where: {id: category_id}});
    }

    @GrpcMethod('Category', 'FindAll')
    async FindAll(): Promise<CategoryResponse[]> {
        return this.categoryRepository.findAll();
    }

    @GrpcMethod('Category', 'Delete')
    async Delete(category_id: number): Promise<DeleteCategory> {
        await this.categoryRepository.destroy({where: {id: category_id}});
        return {status: HttpStatus.OK};
    }

    @GrpcMethod('Category', 'Update')
    async Update(dto: UpdateCategoryDto): Promise<CategoryResponse> {
        await this.categoryRepository.update(dto, {where: {id: dto.id}});
        const category = await this.categoryRepository.findOne({where: {id: dto.id}});
        return category;
    }

    @GrpcMethod('Category', 'Create')
    async Create(dto: CreateCategoryDto): Promise<CategoryResponse> {
        return this.categoryRepository.create(dto);
    }
}
