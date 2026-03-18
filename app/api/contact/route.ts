import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Here you can integrate with email service (SendGrid, Resend, etc.)
    // For now, just return success
    console.log('Contact form submission:', { name, email, message });

    // TODO: Integrate with email service
    // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{ to: [{ email: 'lokeshtv17@gmail.com' }] }],
    //     from: { email: 'noreply@yourportfolio.com' },
    //     subject: `New Contact: ${name}`,
    //     content: [{ type: 'text/plain', value: `${message}\n\nFrom: ${email}` }],
    //   }),
    // });

    return NextResponse.json(
      { message: 'Contact form received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}