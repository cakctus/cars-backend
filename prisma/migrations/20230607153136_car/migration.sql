/*
  Warnings:

  - Made the column `condition` on table `Construction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Construction" ALTER COLUMN "condition" SET NOT NULL,
ALTER COLUMN "contacts" DROP NOT NULL;
