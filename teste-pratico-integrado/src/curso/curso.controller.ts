import {  Controller,  Get,  Post,  Body,  Patch,  Param,  Delete} from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.cursoService.findOne(+id);
  }
  @Get('nome/:nome')
  findMany(@Param('nome') nome: string) {
    return this.cursoService.findMany(nome);
  }
  @Get('busca/:tipo/:nome')
  findOneTipo(@Param('nome') nome: string, @Param('tipo') tipo: string ) {
    return this.cursoService.findOneTipo(nome,tipo);
  }
  @Get('busca/:tipo')
  findManyTipo( @Param('tipo') tipo: string ) {
    return this.cursoService.findManyTipo(tipo);
  }
  @Get('modalidade/:tipo/:modalidade')
  findManyModalidade(@Param('modalidade') modalidade: string, @Param('tipo') tipo: string ) {
    return this.cursoService.findManyModalidade(tipo, modalidade);
  }
  @Get('modalidade/:tipo/:modalidade/:nome')
  findOneModalidade(@Param('modalidade') modalidade: string, @Param('tipo') tipo: string, @Param('nome') nome: string ) {
    return this.cursoService.findOneModalidade(tipo, modalidade, nome);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursoService.update(+id, updateCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursoService.remove(+id);
  }
}
