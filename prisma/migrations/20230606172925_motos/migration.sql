-- AlterTable
ALTER TABLE "Moto" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Moto" ADD CONSTRAINT "Moto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
