/*
  Warnings:

  - Changed the type of `generationId` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `modelId` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `modificationId` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "generationId",
ADD COLUMN     "generationId" INTEGER NOT NULL,
DROP COLUMN "modelId",
ADD COLUMN     "modelId" INTEGER NOT NULL,
DROP COLUMN "modificationId",
ADD COLUMN     "modificationId" INTEGER NOT NULL;
