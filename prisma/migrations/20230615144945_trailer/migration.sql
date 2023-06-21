/*
  Warnings:

  - You are about to drop the column `condition` on the `Trailer` table. All the data in the column will be lost.
  - Added the required column `trailerCondition` to the `Trailer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trailer" DROP COLUMN "condition",
ADD COLUMN     "trailerCondition" TEXT NOT NULL;
