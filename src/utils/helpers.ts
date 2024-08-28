import { AppConfig } from './appConfig';

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === AppConfig.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};

type QueryParams =
  | string
  | URLSearchParams
  | string[][]
  | Record<string, string>
  | undefined;

export function convertToQueryString<T extends QueryParams>(params: T): string {
  if (typeof params === 'string') {
    return params;
  }
  if (params instanceof URLSearchParams) {
    return params.toString();
  }
  if (Array.isArray(params)) {
    return new URLSearchParams(params).toString();
  }
  if (typeof params === 'object' && params !== null) {
    return new URLSearchParams(params).toString();
  }
  return '';
}

export function deleteNullAndUndefined<T>(data: { [x: string]: any }): T {
  return Object.keys(data)
    .filter((key) => data[key] !== null && data[key] !== undefined)
    .reduce((acc, key) => ({ ...acc, [key]: data[key] }), {}) as T;
}
