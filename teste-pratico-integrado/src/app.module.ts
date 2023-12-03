import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CursoModule } from './curso/curso.module';
import { FuturoAlunoModule } from './futuro-aluno/futuro-aluno.module';
import { ModalidadeModule } from './modalidade/modalidade.module';
import { TipoModule } from './tipo/tipo.module';
@Module({
  imports: [PrismaModule, CursoModule, FuturoAlunoModule, ModalidadeModule, TipoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
