/*
  Warnings:

  - Added the required column `generationId` to the `CarParts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelId` to the `CarParts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modificationId` to the `CarParts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarParts" ADD COLUMN     "generationId" TEXT NOT NULL,
ADD COLUMN     "modelId" TEXT NOT NULL,
ADD COLUMN     "modificationId" TEXT NOT NULL;
