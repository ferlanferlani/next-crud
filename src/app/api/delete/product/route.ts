import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export const DELETE = async ({ params }: { params: { id: string } }) => {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!product) {
    return NextResponse.json({
      status: 404,
      message: "Product not found",
    });
  }

  try {
  } catch (error) {}
};
