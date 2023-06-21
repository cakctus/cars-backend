/*
  Warnings:

  - You are about to drop the column `type` on the `Construction` table. All the data in the column will be lost.
  - Added the required column `constructionTypes` to the `Construction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Construction" DROP COLUMN "type",
ADD COLUMN     "constructionTypes" TEXT NOT NULL;
