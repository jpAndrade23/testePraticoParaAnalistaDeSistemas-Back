/*
  Warnings:

  - You are about to drop the column `modalidade` on the `Curso` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Curso` table. All the data in the column will be lost.
  - Added the required column `modalidadeId` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoId` to the `Curso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Curso" DROP COLUMN "modalidade",
DROP COLUMN "tipo",
ADD COLUMN     "modalidadeId" INTEGER NOT NULL,
ADD COLUMN     "tipoId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Tipo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Tipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modalidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Modalidade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_id_key" ON "Tipo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Modalidade_id_key" ON "Modalidade"("id");

-- AddForeignKey
ALTER TABLE "Curso" ADD CONSTRAINT "Curso_modalidadeId_fkey" FOREIGN KEY ("modalidadeId") REFERENCES "Modalidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curso" ADD CONSTRAINT "Curso_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "Tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
