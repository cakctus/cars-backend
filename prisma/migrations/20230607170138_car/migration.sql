-- AlterTable
ALTER TABLE "Trailer" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Trailer" ADD CONSTRAINT "Trailer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
