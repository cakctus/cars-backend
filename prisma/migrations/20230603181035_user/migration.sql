-- CreateTable
CREATE TABLE "Number" (
    "id" SERIAL NOT NULL,
    "number" TEXT,
    "userId" INTEGER,

    CONSTRAINT "Number_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Number_number_key" ON "Number"("number");

-- AddForeignKey
ALTER TABLE "Number" ADD CONSTRAINT "Number_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
