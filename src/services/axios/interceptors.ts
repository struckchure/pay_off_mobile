import { InternalAxiosRequestConfig } from "axios";

export function authorizationTokenInterceptor(
  config: InternalAxiosRequestConfig<any>,
) {
  const token = null;

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
}
