/*
  Warnings:

  - Made the column `year` on table `Trailer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `condition` on table `Trailer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Trailer" ALTER COLUMN "year" SET NOT NULL,
ALTER COLUMN "condition" SET NOT NULL,
ALTER COLUMN "contacts" DROP NOT NULL;
