-- AlterTable
ALTER TABLE "BusMicrobus" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "BusMicrobus" ADD CONSTRAINT "BusMicrobus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
