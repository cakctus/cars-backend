/*
  Warnings:

  - Added the required column `carModel` to the `Batteries` table without a default value. This is not possible if the table is not empty.
  - Made the column `carBrand` on table `Batteries` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Batteries" ADD COLUMN     "carModel" TEXT NOT NULL,
ALTER COLUMN "carBrand" SET NOT NULL;
