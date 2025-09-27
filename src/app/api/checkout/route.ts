// src/app/api/checkout/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
  }

  try {
    const { items, total } = await req.json();
    
    // --- TEMPORARY TEST CODE ---
    // Instead of saving to the database, we log the order to the console.
    console.log('--- FAKE CHECKOUT PROCESSED ---');
    console.log('Order received for user:', session.user.email);
    console.log('Total:', total);
    console.log('Items:', items);
    console.log('-----------------------------');

    // Return a success message with a fake order ID
    const fakeOrderId = `fake_${Date.now()}`;
    return NextResponse.json({ success: true, message: 'Fake order created!', orderId: fakeOrderId });

  } catch (error) {
    console.error('Checkout API Error:', error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}