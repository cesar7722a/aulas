-- CreateTable
CREATE TABLE `aluno` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `aluno_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `professor` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `professor_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aula` (
    `id` VARCHAR(191) NOT NULL,
    `tema` VARCHAR(100) NOT NULL,
    `duracao` INTEGER NOT NULL,
    `professor_id` VARCHAR(191) NOT NULL,
    `curso_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `curso` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AlunoToCurso` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AlunoToCurso_AB_unique`(`A`, `B`),
    INDEX `_AlunoToCurso_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AlunoToAula` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AlunoToAula_AB_unique`(`A`, `B`),
    INDEX `_AlunoToAula_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aula` ADD CONSTRAINT `aula_professor_id_fkey` FOREIGN KEY (`professor_id`) REFERENCES `professor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aula` ADD CONSTRAINT `aula_curso_id_fkey` FOREIGN KEY (`curso_id`) REFERENCES `curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AlunoToCurso` ADD CONSTRAINT `_AlunoToCurso_A_fkey` FOREIGN KEY (`A`) REFERENCES `aluno`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AlunoToCurso` ADD CONSTRAINT `_AlunoToCurso_B_fkey` FOREIGN KEY (`B`) REFERENCES `curso`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AlunoToAula` ADD CONSTRAINT `_AlunoToAula_A_fkey` FOREIGN KEY (`A`) REFERENCES `aluno`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AlunoToAula` ADD CONSTRAINT `_AlunoToAula_B_fkey` FOREIGN KEY (`B`) REFERENCES `aula`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
