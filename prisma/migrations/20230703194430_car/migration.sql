/*
  Warnings:

  - You are about to drop the column `discId` on the `WheelsTire` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "WheelsTire" DROP CONSTRAINT "WheelsTire_discId_fkey";

-- AlterTable
ALTER TABLE "Disc" ADD COLUMN     "wheelsTireId" INTEGER;

-- AlterTable
ALTER TABLE "WheelsTire" DROP COLUMN "discId";

-- AddForeignKey
ALTER TABLE "Disc" ADD CONSTRAINT "Disc_wheelsTireId_fkey" FOREIGN KEY ("wheelsTireId") REFERENCES "WheelsTire"("id") ON DELETE SET NULL ON UPDATE CASCADE;
