import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';
import middlewareRedirect from './lib/auth/middlewareRedirect';

const authorizedRoles = ['ADMIN', 'TEACHER', 'GROUP_MANAGER', 'STUDENT']; // Authorized Roles
const publicPaths = ['/onboarding']; // Public Paths [only ones we want to do something with if user isn't authed]

const isPublicPath = (path: string) => publicPaths.includes(path); // Check if path is public

// * Middleware Handler
export async function middleware(req: NextRequest) {
  const supabase = createMiddlewareSupabaseClient({
    req,
    res: NextResponse.next(),
  }); // Create Supabase Client for Middleware

  const {
    data: { session },
  } = await supabase.auth.getSession(); // Get Session

  const isAuthorized =
    session && authorizedRoles.includes(session.user.app_metadata.role); // Check if user is authorized
  const allowedAccess =
    isAuthorized || (!isAuthorized && isPublicPath(req.nextUrl.pathname)); // Check if user is allowed access

  // If Authorized, udpate the user's streak
  if (isAuthorized && process.env.NODE_ENV === 'production') {
    await supabase
      .from('profiles')
      .update({ last_activity: new Date(), status: 'ONLINE' })
      .eq('id', session.user.id);
  }

  return allowedAccess ? NextResponse.next() : middlewareRedirect(req, '/'); // Return Response or Redirect
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/profile/:path*',
    '/account/:path*',
    '/lesson-creator/:path*',
    '/help-center/:path*',
    '/curriculum-roadmap/:path*',
    '/schedule-builder/:path*',
    '/onboarding/:path*',
  ],
};
