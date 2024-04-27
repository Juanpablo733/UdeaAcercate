-- CreateEnum
CREATE TYPE "Sentiment" AS ENUM ('Positive', 'Neutral', 'Negative');

-- CreateTable
CREATE TABLE "CommentSentiment" (
    "id" TEXT NOT NULL,
    "sentiment" "Sentiment" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CommentSentiment_id_key" ON "CommentSentiment"("id");
