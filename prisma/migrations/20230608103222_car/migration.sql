/*
  Warnings:

  - You are about to drop the column `boltPattern` on the `Disc` table. All the data in the column will be lost.
  - You are about to drop the column `diameterDIA` on the `Disc` table. All the data in the column will be lost.
  - You are about to drop the column `material` on the `Disc` table. All the data in the column will be lost.
  - You are about to drop the column `rimWidth` on the `Disc` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Disc" DROP COLUMN "boltPattern",
DROP COLUMN "diameterDIA",
DROP COLUMN "material",
DROP COLUMN "rimWidth";
