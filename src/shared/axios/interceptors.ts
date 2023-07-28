import { AxiosInstance, InternalAxiosRequestConfig } from "axios";

import { Storage } from "@src/shared/storage";

const storage = new Storage();

export async function authorizationTokenInterceptor(
  config: InternalAxiosRequestConfig<any>,
) {
  const token = await storage.get("accessToken");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
}

export async function refreshJWTTokens(err: any, instance: AxiosInstance) {
  const originalConfig = err.config;

  if (!["/auth/login/"].includes(originalConfig.url) && err.response) {
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        const obtainTokensResponse = await instance.post(
          "auth/obtain-tokens/",
          {
            refreshToken: await storage.get("refreshToken"),
          },
        );

        const { accessToken, refreshToken } = obtainTokensResponse.data;

        await storage.set("accessToken", accessToken);
        await storage.set("refreshToken", refreshToken);

        return instance(originalConfig);
      } catch (error: any) {
        return Promise.reject(error);
      }
    }
  }

  return Promise.reject(err);
}
