/*
  Warnings:

  - You are about to drop the column `carBrand` on the `Batteries` table. All the data in the column will be lost.
  - You are about to drop the column `carModel` on the `Batteries` table. All the data in the column will be lost.
  - Added the required column `brand` to the `Batteries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Batteries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Batteries" DROP COLUMN "carBrand",
DROP COLUMN "carModel",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL;
