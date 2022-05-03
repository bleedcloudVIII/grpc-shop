import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientGrpc, GrpcMethod, GrpcStreamCall, GrpcStreamMethod } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/sequelize';
import { ICategoryService } from 'src/proto/app/category.app.proto';
import { CategoryResponse } from 'src/proto/categories/CategoryResponse';
import { DeleteCategory } from 'src/proto/categories/DeleteCategory';
import { FindAllCategoryResponse } from 'src/proto/categories/FindAllCategoryResponse';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { HttpException } from '@nestjs/common';

@Injectable()
export class CategoryService {
    private categoryService: ICategoryService;

    constructor(@InjectModel(Category) private readonly categoriesRepository: typeof Category,
    @Inject('Category_Package') private readonly client: ClientGrpc) {}
    // constructor(@Inject('categories') private client: ClientGrpc) {}

    onModuleInit() {
        this.categoryService = this.client.getService<ICategoryService>('Category');
    }

    @GrpcMethod('Category', 'Create')
    public async create(dto: CreateCategoryDto): Promise<CategoryResponse> {
        return this.categoriesRepository.create(dto);
    }

    @GrpcMethod('Category', 'FindAll')
    async findAll(): Promise<CategoryResponse[]> {
        console.log('2');
        return this.categoriesRepository.findAll();
    }

    @GrpcMethod('Category', 'FindOne')
    async FindOne(category_id: number)/*: Promise<CategoryResponse>*/ {
        console.log('2');
        // return this.categoriesRepository.findOne({where: {id: category_id}});
        return new HttpException('sdsds', HttpStatus.FOUND);
    }

    @GrpcMethod('Category', 'Delete')
    async delete(category_id: number): Promise<DeleteCategory> {
        await this.categoriesRepository.destroy({where: {id: category_id}});
        return {status: HttpStatus.OK};
        // return HttpStatus.OK;
    }

    @GrpcMethod('Category', 'Update')
    async update(dto: UpdateCategoryDto): Promise<CategoryResponse> {
        await this.categoriesRepository.update(dto, {where: {id: dto.id}});
        const category = await this.categoriesRepository.findOne({where: {id: dto.id}});
        return category;
    }

}
