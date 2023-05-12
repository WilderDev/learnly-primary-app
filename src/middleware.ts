import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';
import middlewareRedirect from './lib/auth/middlewareRedirect';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next(); // Abstract Successful Response

  const supabase = createMiddlewareSupabaseClient({ req, res }); // Create Supabase Client for Middleware

  const {
    data: { session },
  } = await supabase.auth.getSession(); // Get Session

  const authorizedRoles = ['ADMIN', 'TEACHER', 'GROUP_MANAGER', 'STUDENT']; // Authorized Roles
  const publicPaths = ['/onboarding', '/api/auth']; // Public Paths
  const authorized =
    session &&
    authorizedRoles.includes(session.user.app_metadata.role) &&
    !publicPaths.includes(req.nextUrl.pathname); // Authorized (Session Exists, Role is Authorized, Path is not Public)

  // If Authorized, udpate the user's streak
  if (authorized && process.env.NODE_ENV === 'production') {
    await supabase
      .from('profiles')
      .update({ last_activity: new Date(), status: 'ONLINE' })
      .eq('id', session.user.id);
  }

  return authorized ? res : middlewareRedirect(req, '/'); // Return Response or Redirect
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
