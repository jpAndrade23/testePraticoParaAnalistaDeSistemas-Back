import { Module } from '@nestjs/common';
import { FuturoAlunoService } from './futuro-aluno.service';
import { FuturoAlunoController } from './futuro-aluno.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FuturoAlunoController],
  providers: [FuturoAlunoService],
})
export class FuturoAlunoModule {}
