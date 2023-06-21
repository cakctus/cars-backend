-- AlterTable
ALTER TABLE "Construction" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Construction" ADD CONSTRAINT "Construction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
