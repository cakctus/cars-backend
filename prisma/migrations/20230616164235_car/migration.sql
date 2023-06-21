/*
  Warnings:

  - You are about to drop the column `manufacturer` on the `Batteries` table. All the data in the column will be lost.
  - Added the required column `batteryBrands` to the `Batteries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Batteries" DROP COLUMN "manufacturer",
ADD COLUMN     "batteryBrands" TEXT NOT NULL;
