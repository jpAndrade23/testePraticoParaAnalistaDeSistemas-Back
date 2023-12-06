import { Injectable } from '@nestjs/common';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoService {
  constructor(private prismaService: PrismaService) {}
  create(createTipoDto: CreateTipoDto) {
    return this.prismaService.tipo.create({
      data: createTipoDto,
    });
  }

  findAll() {
    return this.prismaService.tipo.findMany();
  }

  findOne(id: number) {
    return this.prismaService.tipo.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTipoDto: UpdateTipoDto) {
    return this.prismaService.tipo.update({
      where: { id },
      data: updateTipoDto,
    });
  }

  remove(id: number) {
    return this.prismaService.tipo.delete({
      where: { id },
    });
  }
}
