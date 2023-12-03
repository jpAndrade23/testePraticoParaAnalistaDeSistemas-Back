import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModalidadeService } from './modalidade.service';
import { CreateModalidadeDto } from './dto/create-modalidade.dto';
import { UpdateModalidadeDto } from './dto/update-modalidade.dto';

@Controller('modalidade')
export class ModalidadeController {
  constructor(private readonly modalidadeService: ModalidadeService) {}

  @Post()
  create(@Body() createModalidadeDto: CreateModalidadeDto) {
    return this.modalidadeService.create(createModalidadeDto);
  }

  @Get()
  findAll() {
    return this.modalidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modalidadeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModalidadeDto: UpdateModalidadeDto) {
    return this.modalidadeService.update(+id, updateModalidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modalidadeService.remove(+id);
  }
}
