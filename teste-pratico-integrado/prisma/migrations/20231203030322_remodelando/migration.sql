/*
  Warnings:

  - You are about to drop the `Modalidade` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `modalidade` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Curso` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Modalidade" DROP CONSTRAINT "Modalidade_cursoId_fkey";

-- AlterTable
ALTER TABLE "Curso" ADD COLUMN     "modalidade" TEXT NOT NULL,
ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "duracao" SET DATA TYPE DOUBLE PRECISION;

-- DropTable
DROP TABLE "Modalidade";
