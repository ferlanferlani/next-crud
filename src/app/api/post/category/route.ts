import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { category } from "@prisma/client";

export const POST = async (req: NextRequest) => {
  const body: category = await req.json();

  try {
    const productCategory = await prisma.category.create({
      data: {
        name: body.name,
      },
    });
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
