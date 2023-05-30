/*
  Warnings:

  - You are about to drop the column `phones` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_phones_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "phones",
ADD COLUMN     "number" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_number_key" ON "User"("number");
