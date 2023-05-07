import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next(); // Abstract Successful Response

  return res; // Return Response
}

// See "Matching Paths" below to learn more
export const config = {};
