import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const authenticated = await isAuthenticated();
    return NextResponse.json(
      { authenticated },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { authenticated: false },
      { status: 200 }
    );
  }
}

