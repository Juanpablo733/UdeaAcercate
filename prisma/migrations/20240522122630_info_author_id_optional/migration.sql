-- DropForeignKey
ALTER TABLE "Information" DROP CONSTRAINT "Information_authorId_fkey";

-- AlterTable
ALTER TABLE "Information" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Information" ADD CONSTRAINT "Information_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
