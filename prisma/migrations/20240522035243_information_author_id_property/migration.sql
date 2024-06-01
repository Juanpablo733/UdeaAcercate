-- AlterTable
ALTER TABLE "Information" ADD COLUMN     "authorId" TEXT;

-- AddForeignKey
ALTER TABLE "Information" ADD CONSTRAINT "Information_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
