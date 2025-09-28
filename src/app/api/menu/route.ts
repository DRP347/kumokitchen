// src/app/api/menu/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import MenuItem from '@/models/MenuItem';

export async function GET() {
  try {
    await dbConnect(); // Connects to the real database
    const menuItems = await MenuItem.find({}); // Fetches real data from the collection
    return NextResponse.json({ success: true, data: menuItems });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}