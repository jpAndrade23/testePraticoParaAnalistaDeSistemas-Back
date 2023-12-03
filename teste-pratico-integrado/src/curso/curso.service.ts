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
    return this.prismaService.curso.findMany({
      include: { tipoDoCurso: true, modalidadeDoCurso: true },
    });
  }
  findOne(id: number) {
    return this.prismaService.curso.findUnique({
      where: { id },
      include: { tipoDoCurso: true, modalidadeDoCurso: true },
    });
  }
  findMany(nome: string) {
    return this.prismaService.curso.findMany({
      where: { nome: nome },
      include: { tipoDoCurso: true, modalidadeDoCurso: true },
    });
  }
  findManyTipo( tipo: string) {
    return this.prismaService.curso.findMany({
      where: { 
        tipoDoCurso: {
          nome: tipo
        }
      },
      include: { tipoDoCurso: true, modalidadeDoCurso: true },
    });
  }
  findOneTipo(nome: string, tipo: string) {
    return this.prismaService.curso.findMany({
      where: { 
        nome: nome,
        tipoDoCurso: {
          nome: tipo
        }
      },
      include: { tipoDoCurso: true, modalidadeDoCurso: true },
    });
  }
  findManyModalidade( tipo: string, modalidade: string) {
    return this.prismaService.curso.findMany({
      where: { 
        tipoDoCurso: {
          nome: tipo
        },
        modalidadeDoCurso: {
          nome: modalidade
        }
      },
      include: { tipoDoCurso: true, modalidadeDoCurso: true },
    });
  }
  findOneModalidade( tipo: string, modalidade: string, nome: string) {
    return this.prismaService.curso.findMany({
      where: { 
        nome: nome,
        tipoDoCurso: {
          nome: tipo
        },
        modalidadeDoCurso: {
          nome: modalidade
        }
      },
      include: { tipoDoCurso: true, modalidadeDoCurso: true },
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
