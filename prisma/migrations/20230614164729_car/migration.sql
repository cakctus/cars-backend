/*
  Warnings:

  - You are about to drop the column `bodyType` on the `BusMicrobus` table. All the data in the column will be lost.
  - Added the required column `busBodyType` to the `BusMicrobus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BusMicrobus" DROP COLUMN "bodyType",
ADD COLUMN     "busBodyType" TEXT NOT NULL;
