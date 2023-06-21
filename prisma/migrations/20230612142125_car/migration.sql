-- AlterTable
ALTER TABLE "AutoService" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "AutoService" ADD CONSTRAINT "AutoService_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
