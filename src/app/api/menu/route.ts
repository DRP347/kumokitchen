// src/app/api/menu/route.ts
import { NextResponse } from 'next/server';

// --- TEMPORARY TEST CODE for Local Development ---
export async function GET() {
  try {
    const fakeMenuItems = [
      { _id: '1', name: 'TEST: Shoyu Ramen', description: 'This is a test description.', price: 15.99, imageUrl: '/shoyu-ramen.jpg', category: 'Ramen' },
      { _id: '2', name: 'TEST: Dragon Roll', description: 'This is another test.', price: 17.50, imageUrl: '/dragon-roll.jpg', category: 'Sushi' },
      { _id: '3', name: 'TEST: Katsu Don', description: 'A final test item.', price: 13.00, imageUrl: '/katsu-don.jpg', category: 'Donburi' },
    ];
    return NextResponse.json({ success: true, data: fakeMenuItems });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}