import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private readonly userRepository: typeof User) {}
    // private readonly authService: AuthService) {}

    async findAll() {
        return this.userRepository.findAll();
    }

    async findById(id: number) {
        return this.userRepository.findOne({where: {id}})
    }

    async create(dto: CreateUserDto) {
        return this.userRepository.create(dto);
    }

    async update(dto: UpdateUserDto) {
        const hashPassword = await bcrypt.hash(dto.password, 5);
        await this.userRepository.update({...dto, password: hashPassword}, {where: {id: dto.id}});
        const user = await this.userRepository.findOne({where: {id: dto.id}});
        return user;
    }

    async delete(id: number) {
        await this.userRepository.destroy({where: {id}})
        return HttpStatus.OK;
    }

    async findByEmail(email: string) {
        return this.userRepository.findOne({where: {email: email}})
    }
}
