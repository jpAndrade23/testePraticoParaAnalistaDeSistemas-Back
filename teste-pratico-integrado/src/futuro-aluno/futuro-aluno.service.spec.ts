import { Test, TestingModule } from '@nestjs/testing';
import { FuturoAlunoService } from './futuro-aluno.service';

describe('FuturoAlunoService', () => {
  let service: FuturoAlunoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuturoAlunoService],
    }).compile();

    service = module.get<FuturoAlunoService>(FuturoAlunoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
