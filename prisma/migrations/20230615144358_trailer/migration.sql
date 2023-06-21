/*
  Warnings:

  - You are about to drop the column `type` on the `Trailer` table. All the data in the column will be lost.
  - Added the required column `trailerTypes` to the `Trailer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trailer" DROP COLUMN "type",
ADD COLUMN     "trailerTypes" TEXT NOT NULL;
