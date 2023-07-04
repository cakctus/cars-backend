/*
  Warnings:

  - Added the required column `modelId` to the `Batteries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Batteries" ADD COLUMN     "modelId" TEXT NOT NULL;
