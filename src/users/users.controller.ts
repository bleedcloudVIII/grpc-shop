import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    
    constructor(private readonly userService: UsersService) {}

    @Get('')
    findAll() { 
        return this.userService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.userService.findById(id);
    }

    @Get('/ByEmail/:email')
    findByEmail(@Param('email') email: string) {
        return this.userService.findByEmail(email);
    }

    @Post('')
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }

    @Put()
    update(@Body() dto: UpdateUserDto) {
        return this.userService.update(dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }

}

