import { Injectable } from '@nestjs/common';
import { CreateModalidadeDto } from './dto/create-modalidade.dto';
import { UpdateModalidadeDto } from './dto/update-modalidade.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ModalidadeService {
  constructor(private prismaService: PrismaService) {}
  
  create(createModalidadeDto: CreateModalidadeDto) {
    return this.prismaService.modalidade.create({
      data: createModalidadeDto,
    });
  }

  findAll() {
    return this.prismaService.modalidade.findMany();
  }

  findOne(id: number) {
    return this.prismaService.modalidade.findUnique({
      where: { id },
    });
  }

  update(id: number, updateModalidadeDto: UpdateModalidadeDto) {
    return this.prismaService.modalidade.update({
      where: { id }, 
      data: updateModalidadeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.modalidade.delete({
      where: { id },
    });
  }
}
