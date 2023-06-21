-- AlterTable
ALTER TABLE "WheelsTire" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "WheelsTire" ADD CONSTRAINT "WheelsTire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
