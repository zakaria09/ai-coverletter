import { PrismaClient } from "@prisma/client";
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function PUT(request: Request) {
  const {id, image} = request.body as any;
  try {
    await prisma.user.update({ where: { id }, data: { image }});
  } catch (err) {
    return NextResponse.json(err);
  } 
}

export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  console.log(users);

  return NextResponse.json(users);
}