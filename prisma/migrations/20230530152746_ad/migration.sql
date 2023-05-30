-- CreateTable
CREATE TABLE "BusMicrobus" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "steering" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "bodyType" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "engineVolume" TEXT NOT NULL,
    "seats" TEXT NOT NULL,
    "mileage" TEXT NOT NULL,
    "mileageType" TEXT NOT NULL,
    "drive" TEXT,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,

    CONSTRAINT "BusMicrobus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Truck" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "steering" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "bodyType" TEXT NOT NULL,
    "cabinType" TEXT,
    "drive" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "engineVolume" TEXT NOT NULL,
    "enginePower" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "mileage" TEXT NOT NULL,
    "mileageType" TEXT NOT NULL,
    "loadCapacity" TEXT NOT NULL,
    "loadCapacityType" TEXT NOT NULL,
    "totalWeight" TEXT NOT NULL,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,

    CONSTRAINT "Truck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Moto" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "motorcycleType" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "engineVolume" TEXT NOT NULL,
    "mileage" TEXT NOT NULL,
    "mileageType" TEXT NOT NULL,
    "enginePower" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,

    CONSTRAINT "Moto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agriculture" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "manufacturer" TEXT,
    "type" TEXT NOT NULL,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,

    CONSTRAINT "Agriculture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trailer" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "year" TEXT,
    "condition" TEXT,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,

    CONSTRAINT "Trailer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Construction" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "condition" TEXT,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,

    CONSTRAINT "Construction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WheelsTire" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,
    "DiscId" INTEGER,
    "tireId" INTEGER,

    CONSTRAINT "WheelsTire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disc" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "diameter" TEXT NOT NULL,
    "holeCount" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "boltPattern" TEXT NOT NULL,
    "diameterDIA" TEXT NOT NULL,
    "rimWidth" TEXT NOT NULL,
    "material" TEXT NOT NULL,

    CONSTRAINT "Disc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tire" (
    "id" SERIAL NOT NULL,
    "diameter" TEXT NOT NULL,
    "profileWidth" TEXT NOT NULL,
    "profileHeight" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "brand" TEXT NOT NULL,

    CONSTRAINT "Tire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarParts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "year" TEXT,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,

    CONSTRAINT "CarParts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TruckParts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,

    CONSTRAINT "TruckParts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarMirrorsGlassOptics" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,

    CONSTRAINT "CarMirrorsGlassOptics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Batteries" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "carBrand" TEXT NOT NULL,
    "carSeries" TEXT NOT NULL,
    "applicability" TEXT NOT NULL,
    "positiveTerminal" TEXT NOT NULL,
    "housingType" TEXT NOT NULL,
    "electrolyteType" TEXT NOT NULL,
    "terminals" TEXT NOT NULL,
    "maintenanceLevel" TEXT NOT NULL,
    "mountingType" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,

    CONSTRAINT "Batteries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutoService" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "photo" TEXT[],
    "contacts" TEXT NOT NULL,
    "serviceForCars" BOOLEAN NOT NULL DEFAULT false,
    "serviceForTrucks" BOOLEAN NOT NULL DEFAULT false,
    "serviceForAgricultural" BOOLEAN NOT NULL DEFAULT false,
    "serviceForMinibuses" BOOLEAN NOT NULL DEFAULT false,
    "serviceForGardenTractors" BOOLEAN NOT NULL DEFAULT false,
    "serviceForBuses" BOOLEAN NOT NULL DEFAULT false,
    "serviceForSpecial" BOOLEAN NOT NULL DEFAULT false,
    "repairEngine" BOOLEAN NOT NULL DEFAULT false,
    "repairChassis" BOOLEAN NOT NULL DEFAULT false,
    "repairSafetySystems" BOOLEAN NOT NULL DEFAULT false,
    "repairBodyAlignment" BOOLEAN NOT NULL DEFAULT false,
    "repairGlassOptics" BOOLEAN NOT NULL DEFAULT false,
    "repairElectrical" BOOLEAN NOT NULL DEFAULT false,
    "repairTransmission" BOOLEAN NOT NULL DEFAULT false,
    "repairAlarmSystems" BOOLEAN NOT NULL DEFAULT false,
    "repairAirConditioning" BOOLEAN NOT NULL DEFAULT false,
    "repairBodyFrames" BOOLEAN NOT NULL DEFAULT false,
    "repairManagementSystems" BOOLEAN NOT NULL DEFAULT false,
    "repairPainting" BOOLEAN NOT NULL DEFAULT false,
    "repairDetailing" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AutoService_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WheelsTire" ADD CONSTRAINT "WheelsTire_DiscId_fkey" FOREIGN KEY ("DiscId") REFERENCES "Disc"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WheelsTire" ADD CONSTRAINT "WheelsTire_tireId_fkey" FOREIGN KEY ("tireId") REFERENCES "Tire"("id") ON DELETE SET NULL ON UPDATE CASCADE;
