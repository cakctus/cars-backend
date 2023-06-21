/*
  Warnings:

  - You are about to drop the column `repairAirConditioning` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairAlarmSystems` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairBodyAlignment` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairBodyFrames` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairChassis` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairDetailing` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairElectrical` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairEngine` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairGlassOptics` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairManagementSystems` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairPainting` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairSafetySystems` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `repairTransmission` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `serviceForAgricultural` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `serviceForBuses` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `serviceForCars` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `serviceForGardenTractors` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `serviceForMinibuses` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `serviceForSpecial` on the `AutoService` table. All the data in the column will be lost.
  - You are about to drop the column `serviceForTrucks` on the `AutoService` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AutoService" DROP COLUMN "repairAirConditioning",
DROP COLUMN "repairAlarmSystems",
DROP COLUMN "repairBodyAlignment",
DROP COLUMN "repairBodyFrames",
DROP COLUMN "repairChassis",
DROP COLUMN "repairDetailing",
DROP COLUMN "repairElectrical",
DROP COLUMN "repairEngine",
DROP COLUMN "repairGlassOptics",
DROP COLUMN "repairManagementSystems",
DROP COLUMN "repairPainting",
DROP COLUMN "repairSafetySystems",
DROP COLUMN "repairTransmission",
DROP COLUMN "serviceForAgricultural",
DROP COLUMN "serviceForBuses",
DROP COLUMN "serviceForCars",
DROP COLUMN "serviceForGardenTractors",
DROP COLUMN "serviceForMinibuses",
DROP COLUMN "serviceForSpecial",
DROP COLUMN "serviceForTrucks";

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "serviceForCars" BOOLEAN NOT NULL DEFAULT false,
    "serviceForTrucks" BOOLEAN NOT NULL DEFAULT false,
    "serviceForAgricultural" BOOLEAN NOT NULL DEFAULT false,
    "serviceForMinibuses" BOOLEAN NOT NULL DEFAULT false,
    "serviceForGardenTractors" BOOLEAN NOT NULL DEFAULT false,
    "serviceForBuses" BOOLEAN NOT NULL DEFAULT false,
    "serviceForSpecial" BOOLEAN NOT NULL DEFAULT false,
    "autoServiceId" INTEGER,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repair" (
    "id" SERIAL NOT NULL,
    "repairEngine" BOOLEAN NOT NULL DEFAULT false,
    "repairChassis" BOOLEAN NOT NULL DEFAULT false,
    "repairSafetySystems" BOOLEAN NOT NULL DEFAULT false,
    "repairBodyAlignment" BOOLEAN NOT NULL DEFAULT false,
    "repairGlassOptics" BOOLEAN NOT NULL DEFAULT false,
    "repairElectrical" BOOLEAN NOT NULL DEFAULT false,
    "repairTransmission" BOOLEAN NOT NULL DEFAULT false,
    "repairAlarmSystems" BOOLEAN NOT NULL DEFAULT false,
    "repairAirConditioning" BOOLEAN NOT NULL DEFAULT false,
    "repairBodyFrames" BOOLEAN NOT NULL DEFAULT false,
    "repairManagementSystems" BOOLEAN NOT NULL DEFAULT false,
    "repairPainting" BOOLEAN NOT NULL DEFAULT false,
    "repairDetailing" BOOLEAN NOT NULL DEFAULT false,
    "autoServiceId" INTEGER,

    CONSTRAINT "Repair_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_autoServiceId_fkey" FOREIGN KEY ("autoServiceId") REFERENCES "AutoService"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_autoServiceId_fkey" FOREIGN KEY ("autoServiceId") REFERENCES "AutoService"("id") ON DELETE SET NULL ON UPDATE CASCADE;
