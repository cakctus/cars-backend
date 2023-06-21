/*
  Warnings:

  - You are about to drop the column `type` on the `CarParts` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `CarParts` table. All the data in the column will be lost.
  - Added the required column `generation` to the `CarParts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modification` to the `CarParts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarParts" DROP COLUMN "type",
DROP COLUMN "year",
ADD COLUMN     "generation" TEXT NOT NULL,
ADD COLUMN     "modification" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "CarParts" ADD CONSTRAINT "CarParts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
