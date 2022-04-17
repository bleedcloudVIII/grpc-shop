import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.model';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService, 
                private readonly jwtService: JwtService) {}

    async registration(dto: CreateUserDto) {
        const candidate = await this.userService.findByEmail(dto.email);
        if (candidate) {
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userService.create({...dto, password: hashPassword});
        return this.generateToken(user);
    }

    async login(dto: CreateUserDto) {
        const user = await this.validateUser(dto);
        return this.generateToken(user);
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, password: user.password};
        return { token: this.jwtService.sign(payload)};
    }

    private async validateUser(dto: CreateUserDto) {
        const user = await this.userService.findByEmail(dto.email);
        const passwordEquals = await bcrypt.compare(dto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: 'Некорректный email или password'});
    }

    async createHashPassword(password: string) {
        const hashPassword = await bcrypt.hash(password, 5);
        return hashPassword;
    }
}
