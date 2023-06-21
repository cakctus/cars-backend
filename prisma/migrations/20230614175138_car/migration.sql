/*
  Warnings:

  - You are about to drop the column `bodyType` on the `Truck` table. All the data in the column will be lost.
  - You are about to drop the column `totalWeight` on the `Truck` table. All the data in the column will be lost.
  - You are about to drop the column `transmission` on the `Truck` table. All the data in the column will be lost.
  - Added the required column `totalWeighTitle` to the `Truck` table without a default value. This is not possible if the table is not empty.
  - Added the required column `truckBodyType` to the `Truck` table without a default value. This is not possible if the table is not empty.
  - Added the required column `truckTransmissionsType` to the `Truck` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Truck" DROP COLUMN "bodyType",
DROP COLUMN "totalWeight",
DROP COLUMN "transmission",
ADD COLUMN     "totalWeighTitle" TEXT NOT NULL,
ADD COLUMN     "truckBodyType" TEXT NOT NULL,
ADD COLUMN     "truckTransmissionsType" TEXT NOT NULL;
