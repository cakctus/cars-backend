/*
  Warnings:

  - Added the required column `partsCondition` to the `Batteries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Batteries" ADD COLUMN     "partsCondition" TEXT NOT NULL;
