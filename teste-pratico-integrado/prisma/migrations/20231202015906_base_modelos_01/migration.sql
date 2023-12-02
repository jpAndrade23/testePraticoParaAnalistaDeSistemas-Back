-- CreateTable
CREATE TABLE "Curso" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "tipo" BOOLEAN NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modalidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Modalidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Futuro_Aluno" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "imagemDoocumento" TEXT NOT NULL,

    CONSTRAINT "Futuro_Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Curso_id_key" ON "Curso"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Modalidade_id_key" ON "Modalidade"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Futuro_Aluno_id_key" ON "Futuro_Aluno"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Futuro_Aluno_CPF_key" ON "Futuro_Aluno"("CPF");

-- AddForeignKey
ALTER TABLE "Modalidade" ADD CONSTRAINT "Modalidade_id_fkey" FOREIGN KEY ("id") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Futuro_Aluno" ADD CONSTRAINT "Futuro_Aluno_id_fkey" FOREIGN KEY ("id") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
