import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_SECRET = process.env.ADMIN_PASSWORD || 'default_secret_change_in_production';

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);
  
  if (!session) return false;
  
  // Simple session validation - in production, use proper session tokens
  try {
    const sessionData = JSON.parse(session.value);
    return sessionData.authenticated === true && sessionData.secret === SESSION_SECRET;
  } catch {
    return false;
  }
}

export async function createSession(): Promise<string> {
  const sessionData = {
    authenticated: true,
    secret: SESSION_SECRET,
    timestamp: Date.now()
  };
  return JSON.stringify(sessionData);
}

export async function clearSession(): Promise<void> {
  // Session clearing is handled in the route
}

