/*
  Warnings:

  - You are about to drop the column `type` on the `Disc` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `WheelsTire` table. All the data in the column will be lost.
  - Added the required column `wheelTireTypes` to the `WheelsTire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Disc" DROP COLUMN "type",
ADD COLUMN     "discType" TEXT;

-- AlterTable
ALTER TABLE "WheelsTire" DROP COLUMN "type",
ADD COLUMN     "wheelTireTypes" TEXT NOT NULL;
