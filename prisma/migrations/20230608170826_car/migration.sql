-- AlterTable
ALTER TABLE "CarMirrorsGlassOptics" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "CarMirrorsGlassOptics" ADD CONSTRAINT "CarMirrorsGlassOptics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
