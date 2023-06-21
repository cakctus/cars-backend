-- AlterTable
ALTER TABLE "Batteries" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Batteries" ADD CONSTRAINT "Batteries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
