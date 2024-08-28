import { Env } from '@/libs/env';

const defaultHeaders = {
  Authorization: '',
};

export default async function request<T>(
  url: RequestInfo | URL,
  options?: RequestInit,
) {
  try {
    const response = await fetch(Env.NEXT_PUBLIC_BASE_URL + url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options?.headers,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.log('Fetch error:', error);
    throw error;
  }
}
