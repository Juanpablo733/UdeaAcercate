-- DropIndex
DROP INDEX "Report_eventId_key";

-- DropIndex
DROP INDEX "Report_userId_key";

-- AlterTable
ALTER TABLE "Report" ADD CONSTRAINT "Report_pkey" PRIMARY KEY ("userId", "eventId");
