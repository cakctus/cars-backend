/*
  Warnings:

  - You are about to drop the column `DiscId` on the `WheelsTire` table. All the data in the column will be lost.
  - Added the required column `discId` to the `WheelsTire` table without a default value. This is not possible if the table is not empty.
  - Made the column `tireId` on table `WheelsTire` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "WheelsTire" DROP CONSTRAINT "WheelsTire_DiscId_fkey";

-- DropForeignKey
ALTER TABLE "WheelsTire" DROP CONSTRAINT "WheelsTire_tireId_fkey";

-- AlterTable
ALTER TABLE "WheelsTire" DROP COLUMN "DiscId",
ADD COLUMN     "discId" INTEGER NOT NULL,
ALTER COLUMN "tireId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "WheelsTire" ADD CONSTRAINT "WheelsTire_discId_fkey" FOREIGN KEY ("discId") REFERENCES "Disc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WheelsTire" ADD CONSTRAINT "WheelsTire_tireId_fkey" FOREIGN KEY ("tireId") REFERENCES "Tire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
