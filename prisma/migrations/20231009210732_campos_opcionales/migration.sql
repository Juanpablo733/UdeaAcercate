/*
  Warnings:

  - The `hobbies` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Attendees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attendees" DROP CONSTRAINT "Attendees_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Attendees" DROP CONSTRAINT "Attendees_userId_fkey";

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "faculty" DROP NOT NULL,
ALTER COLUMN "career" DROP NOT NULL,
ALTER COLUMN "type" DROP NOT NULL,
ALTER COLUMN "campus" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
DROP COLUMN "hobbies",
ADD COLUMN     "hobbies" TEXT[];

-- DropTable
DROP TABLE "Attendees";

-- CreateTable
CREATE TABLE "Attendee" (
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "Attendee_pkey" PRIMARY KEY ("userId","eventId")
);

-- AddForeignKey
ALTER TABLE "Attendee" ADD CONSTRAINT "Attendee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendee" ADD CONSTRAINT "Attendee_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
