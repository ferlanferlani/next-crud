import prisma from "@/utils/prisma";
import { product } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async ({ params }: { params: { id: string } }) => {
  const productId = params.id;

  if (!productId) {
    return NextResponse.json({
      status: 404,
      message: "This product not found",
    });
  }

  try {
    const product = await prisma.product.findMany({
      where: {
        id: Number(productId),
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
