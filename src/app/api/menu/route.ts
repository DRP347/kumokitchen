// src/app/api/menu/route.ts
import { NextResponse } from 'next/server';

// --- TEMPORARY FAKE DATA for Local Development ---
export async function GET() {
  try {
    const fakeMenuItems = [
      { _id: '1', name: 'Shoyu Ramen', description: 'This is a test description.', price: 15.99, imageUrl: '/shoyu-ramen.png', category: 'Ramen' },
      { _id: '2', name: 'Dragon Roll', description: 'This is another test.', price: 17.50, imageUrl: '/dragon-roll.png', category: 'Sushi' },
      { _id: '3', name: 'Katsu Don', description: 'A final test item.', price: 13.00, imageUrl: '/katsu-don.png', category: 'Donburi' },
    ];
    return NextResponse.json({ success: true, data: fakeMenuItems });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}