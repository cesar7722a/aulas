/*
  Warnings:

  - You are about to drop the `_PostToTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_PostToTags` DROP FOREIGN KEY `_PostToTags_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PostToTags` DROP FOREIGN KEY `_PostToTags_B_fkey`;

-- DropTable
DROP TABLE `_PostToTags`;

-- CreateTable
CREATE TABLE `_PostsOnTags` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PostsOnTags_AB_unique`(`A`, `B`),
    INDEX `_PostsOnTags_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_PostsOnTags` ADD CONSTRAINT `_PostsOnTags_A_fkey` FOREIGN KEY (`A`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostsOnTags` ADD CONSTRAINT `_PostsOnTags_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
