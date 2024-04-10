import { Delete, Get, Injectable, Post, Put } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {

constructor(private prisma:PrismaService) {}

  @Post()
  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data : createCategoryDto,
    });
  }

  @Get()
  findAll() {
    return this.prisma.category.findMany();
  }

  @Get(':id')
  findOne(id: number) {
   return this.prisma.category.findUnique({
     where: {id}
   });
  }

  @Put(':id')
  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: {id},
      data : updateCategoryDto,
    });
  }

  @Delete(':id')
  remove(id: number) {
    return this.prisma.category.delete({
      where: {id}
    });
  }
}
