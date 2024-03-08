import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse} from "next";
import { NextResponse } from "next/server";
import { Meal } from "@prisma/client";

/**
 * @swagger
 * /api/meals/{id}:
 *   get:
 *     description: Returns a specific meal by id
 *     tags:
 *     - Meals
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the meal to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Get the meal
 *       404:
 *         description: Meal not found
 */
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const id = res.params.id;
    const meal = await prisma.meal.findUnique({
        where: { id: Number(id) },
    });
    if (!meal) {
        return NextResponse.json({ message: "Meal not found" }, { status: 404 });
    }
    return NextResponse.json(meal);
}

/**
 * @swagger
 * /api/meals/{id}:
 *   put:
 *     description: Update an existing meal
 *     tags:
 *     - Meals
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the meal to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Meal not found
 */
export async function PUT(req: Request, res: NextApiResponse) {
    const id = res.params.id;
    const { label, price, amountAvailable, description } = await req.json();
    const existingMeal = await prisma.meal.findUnique({
        where: { id: Number(id) },
    });
    if (!existingMeal) {
        return NextResponse.json({ message: "Meal not found" }, { status: 404 });
    }

    const updatedMeal = await prisma.meal.update({
        where: { id: Number(id) },
        data: {
            label,
            price,
            amountAvailable,
            description
        },
    });
    return NextResponse.json(updatedMeal, { status: 200 });
}

/**
 * @swagger
 * /api/meals/{id}:
 *   delete:
 *     description: Delete an existing meal
 *     tags:
 *     - Meals
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the meal to delete
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Meal not found
 */
export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
    const id = Number(res.params.id);
    const existingMeal = await prisma.meal.findUnique({
        where: { id: Number(id) },
    });

    if (existingMeal) {
        await prisma.meal.delete({
            where: { id },
        });
        return new Response(null, { status: 204 });
    } else {
        return NextResponse.json({message: "Meal not found"}, { status: 404 });
    }
}
