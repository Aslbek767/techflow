// import createMiddleware from 'next-intl/middleware';
// import {routing} from '../i18n/routing';
 
// export default createMiddleware(routing);
 
// export const config = {
//   matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
// };


// import createMiddleware from 'next-intl/middleware';
// import { routing } from '../i18n/routing';

// export default createMiddleware(routing);

// export const config = {
//   matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
// };




// import createMiddleware from 'next-intl/middleware';
// import {routing} from '../i18n/routing'; // Faylingiz joylashuviga qarab yo‘lni to‘g‘rilang

// export default createMiddleware({
//   ...routing,
//   localePrefix: 'as-needed', // URL da har doim til bo'lishi kerak (/en, /uz, /ru)
// });

// export const config = {
//   matcher: [
//     // Faqat kerakli yo‘llarda middleware ishlaydi
//     '/((?!_next|favicon.ico|.*\\..*).*)',
//   ],
// };


import { NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Agar path bosh bo‘lsa yoki locale yo‘q bo‘lsa
  if (pathname === '/' || routing.locales.every(locale => !pathname.startsWith(`/${locale}`))) {
    const defaultLocale = routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Faqat frontend sahifalar uchun
};
