import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category) private readonly categoriesRepository: typeof Category) {}

    async create(dto: CreateCategoryDto) {
        return this.categoriesRepository.create(dto);
    }

    async findAll() {
        return this.categoriesRepository.findAll();
    }

    async findOne(category_id: number) {
        return this.categoriesRepository.findOne({where: {id: category_id}});
    }

    async delete(category_id: number) {
        await this.categoriesRepository.destroy({where: {id: category_id}});
        return HttpStatus.OK;
    }

    async update(dto: UpdateCategoryDto) {
        await this.categoriesRepository.update(dto, {where: {id: dto.id}});
        const category = await this.categoriesRepository.findOne({where: {id: dto.id}});
        return category;
    }

}
