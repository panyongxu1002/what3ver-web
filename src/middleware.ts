import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/appConfig';

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

export default function middleware(
  request: NextRequest,
  // event: NextFetchEvent,
) {
  // Run Clerk middleware only when it's necessary
  // if (
  //   request.nextUrl.pathname.includes('/sign-in') ||
  //   request.nextUrl.pathname.includes('/sign-up')
  // ) {
  // }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
