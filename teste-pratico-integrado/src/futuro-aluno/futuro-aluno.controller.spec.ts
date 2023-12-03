import { Test, TestingModule } from '@nestjs/testing';
import { FuturoAlunoController } from './futuro-aluno.controller';
import { FuturoAlunoService } from './futuro-aluno.service';

describe('FuturoAlunoController', () => {
  let controller: FuturoAlunoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuturoAlunoController],
      providers: [FuturoAlunoService],
    }).compile();

    controller = module.get<FuturoAlunoController>(FuturoAlunoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
