import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_ROUTES = [
  '/',
  '/login',
  '/sign-up',
  '/reset-password',
  '/about',
];

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });
  const { data: { session } } = await supabase.auth.getSession();

  const isPublicRoute = PUBLIC_ROUTES.some(route => 
    request.nextUrl.pathname === route || request.nextUrl.pathname.startsWith('/api/')
  );

  if (!session && !isPublicRoute) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'], // Ignore static files and images
};
