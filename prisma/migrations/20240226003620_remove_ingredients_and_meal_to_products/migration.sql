/*
  Warnings:

  - You are about to drop the `ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ingredientsonmeals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `meal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mealsordered` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ingredientsonmeals` DROP FOREIGN KEY `IngredientsOnMeals_ingredient_id_fkey`;

-- DropForeignKey
ALTER TABLE `ingredientsonmeals` DROP FOREIGN KEY `IngredientsOnMeals_meal_id_fkey`;

-- DropForeignKey
ALTER TABLE `mealsordered` DROP FOREIGN KEY `MealsOrdered_meal_id_fkey`;

-- DropForeignKey
ALTER TABLE `mealsordered` DROP FOREIGN KEY `MealsOrdered_order_id_fkey`;

-- DropTable
DROP TABLE `ingredient`;

-- DropTable
DROP TABLE `ingredientsonmeals`;

-- DropTable
DROP TABLE `meal`;

-- DropTable
DROP TABLE `mealsordered`;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `amountAvailable` INTEGER NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductsOrdered` (
    `order_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`order_id`, `product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductsOrdered` ADD CONSTRAINT `ProductsOrdered_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsOrdered` ADD CONSTRAINT `ProductsOrdered_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
