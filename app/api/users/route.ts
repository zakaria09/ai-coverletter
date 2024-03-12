import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const {email, bio} = body;
  try {
    const bioUpdate = await prisma.user.update({ where: { email }, data: { bio }});
    return NextResponse.json(bioUpdate);
  } catch (err) {
    // console.log(err)
    return NextResponse.json(err);
  } 
}

export async function GET() {
  const users = await prisma.user.findMany();
  console.log(users);

  return NextResponse.json(users);
}