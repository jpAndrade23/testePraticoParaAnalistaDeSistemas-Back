import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CursoService {
  constructor(private prismaService: PrismaService) {}

  create(createCursoDto: CreateCursoDto) {
    return this.prismaService.curso.create({
      data: createCursoDto,
    });
  }
  findAll() {
    return this.prismaService.curso.findMany();
  }
  findOne(id: number) {
    return this.prismaService.curso.findUnique({
      where: { id },
    });
  }
  findMany(nome: string) {
    return this.prismaService.curso.findMany({
      where: { nome: nome },
    });
  }
  update(id: number, updateCursoDto: UpdateCursoDto) {
    return this.prismaService.curso.update({
      where: { id },
      data: updateCursoDto,
    });
  }
  remove(id: number) {
    return this.prismaService.curso.delete({
      where: { id },
    });
  }
}
