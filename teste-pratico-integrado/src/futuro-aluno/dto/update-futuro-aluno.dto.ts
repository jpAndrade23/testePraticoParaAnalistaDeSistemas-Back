import { PartialType } from '@nestjs/mapped-types';
import { CreateFuturoAlunoDto } from './create-futuro-aluno.dto';

export class UpdateFuturoAlunoDto extends PartialType(CreateFuturoAlunoDto) {}
