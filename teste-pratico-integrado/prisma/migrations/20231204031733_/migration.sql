/*
  Warnings:

  - Added the required column `imagemCurso` to the `Curso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Curso" ADD COLUMN     "imagemCurso" TEXT NOT NULL;
