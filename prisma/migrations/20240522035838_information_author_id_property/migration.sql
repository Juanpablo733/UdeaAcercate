/*
  Warnings:

  - Made the column `authorId` on table `Information` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Information" DROP CONSTRAINT "Information_authorId_fkey";

-- AlterTable
ALTER TABLE "Information" ALTER COLUMN "authorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Information" ADD CONSTRAINT "Information_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
