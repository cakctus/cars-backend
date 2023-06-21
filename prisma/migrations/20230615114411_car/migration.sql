/*
  Warnings:

  - You are about to drop the column `type` on the `Agriculture` table. All the data in the column will be lost.
  - Added the required column `tractorType` to the `Agriculture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agriculture" DROP COLUMN "type",
ADD COLUMN     "tractorType" TEXT NOT NULL;
