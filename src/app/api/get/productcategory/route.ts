import { NextResponse, NextRequest } from "next/server";
import prisma from "@/utils/prisma";

export const GET = async (req: NextRequest) => {
  try {
    const productCategory = await prisma.category.findMany();

    if (productCategory.length === 0) {
      return NextResponse.json({
        status: 400,
        error: "No product category found",
      });
    }

    return NextResponse.json({
      status: 200,
      data: productCategory,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 400,
      error: error.message,
    });
  }
};
