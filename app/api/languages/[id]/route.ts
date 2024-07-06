import prisma from "@/db/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  const language = await prisma.languages.findUnique({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json(language);
};

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  const data = req.json();
  const updatedLanguage = await prisma.languages.update({
    where: {
      id: Number(id),
    },
    data,
  });

  return NextResponse.json(updatedLanguage);
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  const deletedLanguage = await prisma.languages.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json(deletedLanguage);
};
