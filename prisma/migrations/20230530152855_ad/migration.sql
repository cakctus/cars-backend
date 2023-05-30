-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "seats" TEXT NOT NULL,
    "steering" TEXT NOT NULL,
    "bodyType" TEXT NOT NULL,
    "doors" TEXT,
    "mileage" TEXT NOT NULL,
    "mileageType" TEXT NOT NULL,
    "engineVolume" TEXT NOT NULL,
    "enginePower" TEXT,
    "fuelType" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "drive" TEXT NOT NULL,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
