import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/ingredients:
 *   get:
 *     description: Returns all ingredients
 *     tags:
 *     - Ingredients
 *     responses:
 *       200:
 *         description: Get all ingredients
 *       204:
 *         description: No Content
 */
export async function GET() {
    const ingredients = await prisma.ingredient.findMany({});
    return NextResponse.json(ingredients);
}

/**
 * @swagger
 * /api/ingredients:
 *   post:
 *     description: Create a new ingredient
 *     tags:
 *     - Ingredients
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *               price:
 *                  type: integer
 *               amountAvailable:
 *                  type: integer
 *               description:
 *                  type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad request
 */
export async function POST(req: Request, res: NextApiResponse) {
    const { label, weight, meals, stockOfIngredients } = await req.json();
    if (!label) {
        return NextResponse.json({ message: "Label is required" }, { status: 400 });
    }

    const ingredient = await prisma.ingredient.create({
        data: {
            label,
            weight,
        },
    });
    return NextResponse.json(ingredient);
}