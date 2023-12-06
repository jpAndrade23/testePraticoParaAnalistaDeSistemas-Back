import { Injectable } from '@nestjs/common';
import { CreateFuturoAlunoDto } from './dto/create-futuro-aluno.dto';
import { UpdateFuturoAlunoDto } from './dto/update-futuro-aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FuturoAlunoService {
  constructor(private prismaService: PrismaService) {}
  create(createFuturoAlunoDto: CreateFuturoAlunoDto) {
    createFuturoAlunoDto.dataNascimento = new Date(createFuturoAlunoDto.dataNascimento);
    return this.prismaService.futuro_Aluno.create({
      data: createFuturoAlunoDto,
    });
  }

  findAll() {
    return this.prismaService.futuro_Aluno.findMany({
      include: {
        cursoDeInteresse: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.futuro_Aluno.findUnique({
      where: { id },
      include: {
        cursoDeInteresse: true,
      },
    });
  }

  update(id: number, updateFuturoAlunoDto: UpdateFuturoAlunoDto) {
    if (updateFuturoAlunoDto.dataNascimento) {
      updateFuturoAlunoDto.dataNascimento = new Date(updateFuturoAlunoDto.dataNascimento);
    }
    return this.prismaService.futuro_Aluno.update({
      where: { id },
      data: updateFuturoAlunoDto,
    });
  }

  remove(id: number) {
    return this.prismaService.futuro_Aluno.delete({
      where: { id },
    });
  }
}
