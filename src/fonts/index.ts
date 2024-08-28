import type { NextFont } from 'next/dist/compiled/@next/font';
import { Mulish } from 'next/font/google';

export const mulish: NextFont = Mulish({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
});
