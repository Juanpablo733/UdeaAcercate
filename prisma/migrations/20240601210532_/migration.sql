-- CreateTable
CREATE TABLE "Report" (
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Report_userId_key" ON "Report"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Report_eventId_key" ON "Report"("eventId");
