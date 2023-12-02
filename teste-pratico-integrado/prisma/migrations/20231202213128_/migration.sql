/*
  Warnings:

  - Added the required column `cursoId` to the `Futuro_Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cursoId` to the `Modalidade` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Futuro_Aluno" DROP CONSTRAINT "Futuro_Aluno_id_fkey";

-- DropForeignKey
ALTER TABLE "Modalidade" DROP CONSTRAINT "Modalidade_id_fkey";

-- AlterTable
ALTER TABLE "Futuro_Aluno" ADD COLUMN     "cursoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Modalidade" ADD COLUMN     "cursoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Modalidade" ADD CONSTRAINT "Modalidade_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Futuro_Aluno" ADD CONSTRAINT "Futuro_Aluno_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
