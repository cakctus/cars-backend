/*
  Warnings:

  - You are about to drop the column `autoServiceId` on the `Repair` table. All the data in the column will be lost.
  - You are about to drop the column `autoServiceId` on the `Service` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Repair" DROP CONSTRAINT "Repair_autoServiceId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_autoServiceId_fkey";

-- AlterTable
ALTER TABLE "AutoService" ADD COLUMN     "repairId" INTEGER,
ADD COLUMN     "serviceId" INTEGER;

-- AlterTable
ALTER TABLE "Repair" DROP COLUMN "autoServiceId";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "autoServiceId";

-- AddForeignKey
ALTER TABLE "AutoService" ADD CONSTRAINT "AutoService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutoService" ADD CONSTRAINT "AutoService_repairId_fkey" FOREIGN KEY ("repairId") REFERENCES "Repair"("id") ON DELETE SET NULL ON UPDATE CASCADE;
