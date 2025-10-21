import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, cellphone, email, address } = await request.json();

    // Validate required fields
    if (!name || !cellphone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For now, we'll log the application and return success
    // In production, you would integrate with your email service or database
    console.log('New Franchise Application:', {
      name,
      cellphone,
      email,
      address,
      timestamp: new Date().toISOString()
    });

    // TODO: Integrate with your email service (SendGrid, AWS SES, etc.)
    // TODO: Store in database for tracking
    // TODO: Send notification emails

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
