import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { product } from "@prisma/client";

export const GET = async () => {
  try {
    const products = await prisma.product.findMany();

    if (products.length === 0) {
      return NextResponse.json({
        message: "No products found",
      });
    }

    return NextResponse.json({
      status: 200,
      data: products,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 400,
      error: error.message,
    });
  }
};
