import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { product } from "@prisma/client";

export const POST = async (req: NextRequest) => {
  const body: product = await req.json();
  const { name, price, categoryId } = body;

  try {
    const product = await prisma.product.create({
      data: {
        name: name,
        price: price,
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
    return NextResponse.json({
      status: 200,
      data: product,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 400,
      error: error.message,
    });
  }
};
