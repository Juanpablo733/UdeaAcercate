-- CreateTable
CREATE TABLE "EmailToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailToken_identifier_key" ON "EmailToken"("identifier");
