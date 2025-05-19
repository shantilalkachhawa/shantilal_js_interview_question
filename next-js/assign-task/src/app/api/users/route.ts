// import { prisma } from '@/lib/prisma';
import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function GET() {
  try {
    const employees = await prisma.employees.findMany(); // ✅ Prisma model name is capitalized
    return NextResponse.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    return NextResponse.json({ error: 'Failed to fetch employees' }, { status: 500 });
  }
}
