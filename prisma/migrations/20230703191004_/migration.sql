/*
  Warnings:

  - You are about to drop the `Disc` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tire` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WheelsTire` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WheelsTire" DROP CONSTRAINT "WheelsTire_discId_fkey";

-- DropForeignKey
ALTER TABLE "WheelsTire" DROP CONSTRAINT "WheelsTire_tireId_fkey";

-- DropForeignKey
ALTER TABLE "WheelsTire" DROP CONSTRAINT "WheelsTire_userId_fkey";

-- DropTable
DROP TABLE "Disc";

-- DropTable
DROP TABLE "Tire";

-- DropTable
DROP TABLE "WheelsTire";
