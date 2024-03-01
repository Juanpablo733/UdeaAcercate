/*
  Warnings:

  - The values [deportivo,academico,cultural] on the enum `Tag` will be removed. If these variants are still used in the database, this will fail.
  - The values [estudiante,profesor,administrativo,egresado] on the enum `UserType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Tag_new" AS ENUM ('Deportivo', 'Academico', 'Cultural');
ALTER TABLE "Event" ALTER COLUMN "tag" TYPE "Tag_new" USING ("tag"::text::"Tag_new");
ALTER TYPE "Tag" RENAME TO "Tag_old";
ALTER TYPE "Tag_new" RENAME TO "Tag";
DROP TYPE "Tag_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "UserType_new" AS ENUM ('Estudiante', 'Profesor', 'Administrativo', 'Egresado');
ALTER TABLE "Profile" ALTER COLUMN "type" TYPE "UserType_new" USING ("type"::text::"UserType_new");
ALTER TYPE "UserType" RENAME TO "UserType_old";
ALTER TYPE "UserType_new" RENAME TO "UserType";
DROP TYPE "UserType_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
