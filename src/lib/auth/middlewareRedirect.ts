import { NextRequest, NextResponse } from 'next/server';

export default function middlewareRedirect(
  req: NextRequest,
  redirectPath: string,
) {
  const redirectUrl = req.nextUrl.clone(); // Clone URL

  redirectUrl.pathname = redirectPath; // Set Pathname

  redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname); // Set Query Param

  return NextResponse.redirect(redirectUrl); // Return Redirect Response
}
