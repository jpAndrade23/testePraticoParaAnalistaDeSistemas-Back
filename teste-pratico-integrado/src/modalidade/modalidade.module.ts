import { Module } from '@nestjs/common';
import { ModalidadeService } from './modalidade.service';
import { ModalidadeController } from './modalidade.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ModalidadeController],
  providers: [ModalidadeService],
})
export class ModalidadeModule {}
