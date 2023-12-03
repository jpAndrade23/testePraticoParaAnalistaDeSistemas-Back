import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CursoModule } from './curso/curso.module';
@Module({
  imports: [PrismaModule, CursoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
