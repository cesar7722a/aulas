/*
  Warnings:

  - You are about to drop the `curso` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `curso`;

-- CreateTable
CREATE TABLE `Curso` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
