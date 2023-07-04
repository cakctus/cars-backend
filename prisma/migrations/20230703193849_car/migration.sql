/*
  Warnings:

  - You are about to drop the column `wheelsTireId` on the `Disc` table. All the data in the column will be lost.
  - You are about to drop the column `wheelsTireId` on the `Tire` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Disc" DROP CONSTRAINT "Disc_wheelsTireId_fkey";

-- DropForeignKey
ALTER TABLE "Tire" DROP CONSTRAINT "Tire_wheelsTireId_fkey";

-- AlterTable
ALTER TABLE "Disc" DROP COLUMN "wheelsTireId";

-- AlterTable
ALTER TABLE "Tire" DROP COLUMN "wheelsTireId";

-- AlterTable
ALTER TABLE "WheelsTire" ADD COLUMN     "discId" INTEGER,
ADD COLUMN     "tireId" INTEGER;

-- AddForeignKey
ALTER TABLE "WheelsTire" ADD CONSTRAINT "WheelsTire_discId_fkey" FOREIGN KEY ("discId") REFERENCES "Disc"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WheelsTire" ADD CONSTRAINT "WheelsTire_tireId_fkey" FOREIGN KEY ("tireId") REFERENCES "Tire"("id") ON DELETE SET NULL ON UPDATE CASCADE;
