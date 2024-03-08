import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse} from "next";
import { NextResponse } from "next/server";
import { Ingredient } from "@prisma/client";

/**
 * @swagger
 * /api/ingredients/{id}:
 *   get:
 *     description: Returns a specific ingredient by id
 *     tags:
 *     - Ingredients
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the ingredient to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Get the ingredient
 *       404:
 *         description: Ingredient not found
 */
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const id = res.params.id;
    const ingredient = await prisma.ingredient.findUnique({
        where: { id: Number(id) },
    });
    if (!ingredient) {
        return NextResponse.json({ message: "Ingredient not found" }, { status: 404 });
    }
    return NextResponse.json(ingredient);
}

/**
 * @swagger
 * /api/ingredients/{id}:
 *   put:
 *     description: Update an existing ingredient
 *     tags:
 *     - Ingredients
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the ingredient to update
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
 *         description: Ingredient not found
 */
export async function PUT(req: Request, res: NextApiResponse) {
    const id = res.params.id;
    const { label, price, amountAvailable, description } = await req.json();
    const existingIngredient = await prisma.ingredient.findUnique({
        where: { id: Number(id) },
    });
    if (!existingIngredient) {
        return NextResponse.json({ message: "ingredient not found" }, { status: 404 });
    }

    const updatedIngredient = await prisma.ingredient.update({
        where: { id: Number(id) },
        data: {
            label,
            price,
            amountAvailable,
            description
        },
    });
    return NextResponse.json(updatedIngredient, { status: 200 });
}

/**
 * @swagger
 * /api/ingredients/{id}:
 *   delete:
 *     description: Delete an existing ingredient
 *     tags:
 *     - Ingredients
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the ingredient to delete
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Ingredient not found
 */
export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
    const id = Number(res.params.id);
    const existingIngredient = await prisma.ingredient.findUnique({
        where: { id: Number(id) },
    });

    if (existingIngredient) {
        await prisma.ingredient.delete({
            where: { id },
        });
        return new Response(null, { status: 204 });
    } else {
        return NextResponse.json({message: "Ingredient not found"}, { status: 404 });
    }
}
