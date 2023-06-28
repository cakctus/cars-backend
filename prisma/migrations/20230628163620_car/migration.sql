/*
  Warnings:

  - Made the column `brand` on table `Moto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Moto" ALTER COLUMN "brand" SET NOT NULL;
