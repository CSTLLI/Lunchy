/*
  Warnings:

  - You are about to drop the `ingredientsonmeals` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ingredientsonmeals` DROP FOREIGN KEY `IngredientsOnMeals_ingredient_id_fkey`;

-- DropForeignKey
ALTER TABLE `ingredientsonmeals` DROP FOREIGN KEY `IngredientsOnMeals_meal_id_fkey`;

-- AlterTable
ALTER TABLE `ingredient` ADD COLUMN `mealId` INTEGER NULL;

-- DropTable
DROP TABLE `ingredientsonmeals`;

-- AddForeignKey
ALTER TABLE `Ingredient` ADD CONSTRAINT `Ingredient_mealId_fkey` FOREIGN KEY (`mealId`) REFERENCES `Meal`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
