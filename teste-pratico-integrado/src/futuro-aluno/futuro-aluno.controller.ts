import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuturoAlunoService } from './futuro-aluno.service';
import { CreateFuturoAlunoDto } from './dto/create-futuro-aluno.dto';
import { UpdateFuturoAlunoDto } from './dto/update-futuro-aluno.dto';

@Controller('futuro-aluno')
export class FuturoAlunoController {
  constructor(private readonly futuroAlunoService: FuturoAlunoService) {}

  @Post()
  create(@Body() createFuturoAlunoDto: CreateFuturoAlunoDto) {
    return this.futuroAlunoService.create(createFuturoAlunoDto);
  }

  @Get()
  findAll() {
    return this.futuroAlunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.futuroAlunoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFuturoAlunoDto: UpdateFuturoAlunoDto) {
    return this.futuroAlunoService.update(+id, updateFuturoAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.futuroAlunoService.remove(+id);
  }
}
