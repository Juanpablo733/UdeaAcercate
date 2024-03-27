/*
  Warnings:

  - You are about to drop the column `eventId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `hashtags` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `tag` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[infoId]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `infoId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `infoId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RoleTag" AS ENUM ('User', 'Admin');

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_eventId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "eventId",
ADD COLUMN     "infoId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "date",
DROP COLUMN "description",
DROP COLUMN "hashtags",
DROP COLUMN "image",
DROP COLUMN "tag",
DROP COLUMN "title",
ADD COLUMN     "infoId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Information" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "image" TEXT,
    "tag" "Tag" NOT NULL,
    "hashtags" TEXT[],

    CONSTRAINT "Information_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "userId" TEXT NOT NULL,
    "role" "RoleTag" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_userId_key" ON "Role"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_infoId_key" ON "Event"("infoId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_infoId_fkey" FOREIGN KEY ("infoId") REFERENCES "Information"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_infoId_fkey" FOREIGN KEY ("infoId") REFERENCES "Information"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
