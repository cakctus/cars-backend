-- AlterTable
ALTER TABLE "TruckParts" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "TruckParts" ADD CONSTRAINT "TruckParts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
