/*
  Warnings:

  - Made the column `manufacturer` on table `Agriculture` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Agriculture" ADD COLUMN     "userId" INTEGER,
ALTER COLUMN "manufacturer" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Agriculture" ADD CONSTRAINT "Agriculture_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
