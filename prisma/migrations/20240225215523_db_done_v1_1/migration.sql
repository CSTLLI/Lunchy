/*
  Warnings:

  - You are about to drop the column `mealId` on the `ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `ordersId` on the `meal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `ingredient` DROP FOREIGN KEY `Ingredient_mealId_fkey`;

-- DropForeignKey
ALTER TABLE `meal` DROP FOREIGN KEY `Meal_ordersId_fkey`;

-- AlterTable
ALTER TABLE `ingredient` DROP COLUMN `mealId`;

-- AlterTable
ALTER TABLE `meal` DROP COLUMN `ordersId`;
