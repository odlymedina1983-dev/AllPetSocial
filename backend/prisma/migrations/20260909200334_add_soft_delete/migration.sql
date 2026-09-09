-- AlterTable
ALTER TABLE `pet` ADD COLUMN `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `deletedAt` DATETIME(3) NULL;

-- CreateIndex
CREATE INDEX `Pet_deletedAt_idx` ON `Pet`(`deletedAt`);

-- CreateIndex
CREATE INDEX `User_deletedAt_idx` ON `User`(`deletedAt`);
