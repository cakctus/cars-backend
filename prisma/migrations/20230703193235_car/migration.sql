/*
  Warnings:

  - You are about to drop the column `DiscId` on the `WheelsTire` table. All the data in the column will be lost.
  - You are about to drop the column `tireId` on the `WheelsTire` table. All the data in the column will be lost.
  - Added the required column `wheelsTireId` to the `Disc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wheelsTireId` to the `Tire` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WheelsTire" DROP CONSTRAINT "WheelsTire_DiscId_fkey";

-- DropForeignKey
ALTER TABLE "WheelsTire" DROP CONSTRAINT "WheelsTire_tireId_fkey";

-- AlterTable
ALTER TABLE "Disc" ADD COLUMN     "wheelsTireId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tire" ADD COLUMN     "wheelsTireId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "WheelsTire" DROP COLUMN "DiscId",
DROP COLUMN "tireId";

-- AddForeignKey
ALTER TABLE "Disc" ADD CONSTRAINT "Disc_wheelsTireId_fkey" FOREIGN KEY ("wheelsTireId") REFERENCES "WheelsTire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tire" ADD CONSTRAINT "Tire_wheelsTireId_fkey" FOREIGN KEY ("wheelsTireId") REFERENCES "WheelsTire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
