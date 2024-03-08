import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/meals:
 *   get:
 *     description: Returns all meals
 *     tags:
 *     - Meals
 *     responses:
 *       200:
 *         description: Get all meals
 *       204:
 *         description: No Content
 */
export async function GET() {
    const meals = await prisma.meal.findMany({});
    return NextResponse.json(meals);
}

/**
 * @swagger
 * /api/meals:
 *   post:
 *     description: Create a new meal
 *     tags:
 *     - Meals
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
    const { label, price, amountAvailable, description } = await req.json();
    if (!label) {
        return NextResponse.json({ message: "Label is required" }, { status: 400 });
    }
    const meal = await prisma.meal.create({
        data: {
            label,
            price,
            amountAvailable,
            description
        },
    });
    return NextResponse.json(meal);
}