// src/app/api/menu/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import MenuItem from '@/models/MenuItem';

export async function GET() {
  try {
    await dbConnect();
    const menuItems = await MenuItem.find({});
    return NextResponse.json({ success: true, data: menuItems });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}