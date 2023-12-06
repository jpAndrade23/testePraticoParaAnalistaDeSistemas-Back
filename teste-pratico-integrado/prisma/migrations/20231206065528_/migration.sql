/*
  Warnings:

  - Added the required column `nomeDeExibicao` to the `Tipo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tipo" ADD COLUMN     "nomeDeExibicao" TEXT NOT NULL;
