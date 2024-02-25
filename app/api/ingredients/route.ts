import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/ingredients:
 *   get:
 *     description: Returns all ingredients
 *     responses:
 *       200:
 *         description: Get all ingredients
 */
export async function GET() {
    const ingredients = await prisma.ingredient.findMany();
    return NextResponse.json(ingredients);
}

/**
 * @swagger
 * /api/ingredients:
 *   post:
 *     description: Create a new ingredient
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *               weight:
 *                  type: integer
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad request
 */
export async function POST(req: Request, res: NextApiResponse) {
    const { label, weight, meals } = await req.json();
    if (!label) {
        return NextResponse.json({ message: "Label is required" }, { status: 400 });
    }
    const ingredient = await prisma.ingredient.create({
        data: {
            label,
            weight,
            meals
        },
    });
    return NextResponse.json(ingredient);
}