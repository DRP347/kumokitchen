// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // In a real application, you would send an email here using a service
    // like Nodemailer or Resend, or save the message to your database.
    // For now, we'll just log it to the server's console.
    console.log('--- New Contact Message ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('-------------------------');

    return NextResponse.json({ success: true, message: 'Message received successfully!' });

  } catch (error) {
    console.error('API Contact Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}