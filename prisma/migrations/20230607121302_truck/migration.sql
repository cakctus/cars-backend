-- AlterTable
ALTER TABLE "Truck" ADD COLUMN     "userId" INTEGER,
ALTER COLUMN "contacts" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Truck" ADD CONSTRAINT "Truck_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
