/*
  Warnings:

  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `color` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kilometers` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `make` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_carId_fkey`;

-- AlterTable
ALTER TABLE `Post` ADD COLUMN `color` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `kilometers` INTEGER NOT NULL,
    ADD COLUMN `make` VARCHAR(191) NOT NULL,
    ADD COLUMN `model` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `year` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Car`;
