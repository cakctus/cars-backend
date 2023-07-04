-- CreateTable
CREATE TABLE "WheelsTire" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT,
    "wheelTireTypes" TEXT,
    "purpose" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "photo" TEXT[],
    "contacts" TEXT,
    "DiscId" INTEGER,
    "tireId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "WheelsTire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disc" (
    "id" SERIAL NOT NULL,
    "discType" TEXT,
    "diameter" TEXT,
    "holeCount" TEXT,
    "brand" TEXT,

    CONSTRAINT "Disc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tire" (
    "id" SERIAL NOT NULL,
    "diameter" TEXT,
    "profileWidth" TEXT,
    "profileHeight" TEXT,
    "season" TEXT,
    "condition" TEXT,
    "brand" TEXT,

    CONSTRAINT "Tire_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WheelsTire" ADD CONSTRAINT "WheelsTire_DiscId_fkey" FOREIGN KEY ("DiscId") REFERENCES "Disc"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WheelsTire" ADD CONSTRAINT "WheelsTire_tireId_fkey" FOREIGN KEY ("tireId") REFERENCES "Tire"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WheelsTire" ADD CONSTRAINT "WheelsTire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
