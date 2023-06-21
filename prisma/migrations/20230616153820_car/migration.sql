/*
  Warnings:

  - You are about to drop the column `category` on the `CarParts` table. All the data in the column will be lost.
  - You are about to drop the column `condition` on the `CarParts` table. All the data in the column will be lost.
  - Added the required column `partsCategory` to the `CarParts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partsCondition` to the `CarParts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarParts" DROP COLUMN "category",
DROP COLUMN "condition",
ADD COLUMN     "partsCategory" TEXT NOT NULL,
ADD COLUMN     "partsCondition" TEXT NOT NULL;
