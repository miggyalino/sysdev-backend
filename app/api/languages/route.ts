import prisma from "@/db/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const languages = await prisma.languages.findMany();
  return NextResponse.json(languages);
};

export const POST = async (req: Request) => {
  const json = await req.json();
  const createdLanguage = await prisma.languages.create({
    data: {
      ...json,
    },
  });

  return NextResponse.json(createdLanguage, { status: 201 });
};
