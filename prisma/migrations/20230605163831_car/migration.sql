/*
  Warnings:

  - Added the required column `generation` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modification` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "generation" TEXT NOT NULL,
ADD COLUMN     "modification" TEXT NOT NULL;
