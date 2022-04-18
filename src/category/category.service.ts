import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/sequelize';
import { CategoryResponse } from 'src/proto/categories/CategoryResponse';
import { DeleteCategory } from 'src/proto/categories/DeleteCategory';
import { FindAllCategoryResponse } from 'src/proto/categories/FindAllCategoryResponse';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category) private readonly categoriesRepository: typeof Category) {}

    // @Inject('CategoryService')
    // private readonly client: ClientGrpc;


    public async create(dto: CreateCategoryDto): Promise<CategoryResponse> {
        return this.categoriesRepository.create(dto);
    }

    async findAll(): Promise<CategoryResponse[]> {
        return this.categoriesRepository.findAll();
    }

    async findOne(category_id: number): Promise<CategoryResponse> {
        return this.categoriesRepository.findOne({where: {id: category_id}});
    }

    async delete(category_id: number): Promise<DeleteCategory> {
        await this.categoriesRepository.destroy({where: {id: category_id}});
        return {status: HttpStatus.OK};
        // return HttpStatus.OK;
    }

    async update(dto: UpdateCategoryDto): Promise<CategoryResponse> {
        await this.categoriesRepository.update(dto, {where: {id: dto.id}});
        const category = await this.categoriesRepository.findOne({where: {id: dto.id}});
        return category;
    }

}
