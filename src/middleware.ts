import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next(); // Abstract Successful Response

  const supabase = createMiddlewareSupabaseClient({ req, res }); // Create Supabase Client for Middleware

  const {
    data: { session },
  } = await supabase.auth.getSession(); // Get Session

  // If no session and the route is protected, redirect to home
  if (!session) {
    const redirectUrl = req.nextUrl.clone(); // Clone URL
    redirectUrl.pathname = '/'; // Set Pathname
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname); // Set Query Param
    return NextResponse.redirect(redirectUrl); // Return Redirect Response
  }

  return res; // Return Response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile'],
};
