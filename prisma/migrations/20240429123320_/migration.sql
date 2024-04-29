/*
  Warnings:

  - Added the required column `commentTag` to the `CommentSentiment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confidence` to the `CommentSentiment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommentSentiment" ADD COLUMN     "commentTag" "Tag" NOT NULL,
ADD COLUMN     "confidence" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "dateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
