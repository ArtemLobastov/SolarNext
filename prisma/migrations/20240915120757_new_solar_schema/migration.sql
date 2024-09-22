/*
  Warnings:

  - You are about to drop the column `name` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `agentId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `categoryName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `ProductCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ProductCategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Agent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FamilyMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Installer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductToProductCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `firstName` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productStatusId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `roleId` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_agentId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_installerId_fkey";

-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_agentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToProductCategory" DROP CONSTRAINT "_ProductToProductCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToProductCategory" DROP CONSTRAINT "_ProductToProductCategory_B_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "agentId",
ALTER COLUMN "installerId" DROP NOT NULL,
ALTER COLUMN "remainingBalance" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryName",
DROP COLUMN "status",
ADD COLUMN     "productCategoryId" INTEGER,
ADD COLUMN     "productStatusId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
DROP COLUMN "roleId",
ADD COLUMN     "roleId" INTEGER NOT NULL,
ALTER COLUMN "activated" SET DEFAULT true;

-- DropTable
DROP TABLE "Agent";

-- DropTable
DROP TABLE "FamilyMember";

-- DropTable
DROP TABLE "Installer";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "_ProductToProductCategory";

-- CreateTable
CREATE TABLE "ProductStatus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProductStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JobToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_JobToUser_AB_unique" ON "_JobToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToUser_B_index" ON "_JobToUser"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productStatusId_fkey" FOREIGN KEY ("productStatusId") REFERENCES "ProductStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "UserRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToUser" ADD CONSTRAINT "_JobToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToUser" ADD CONSTRAINT "_JobToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
