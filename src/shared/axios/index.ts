import axios from "axios";

import {
  authorizationTokenInterceptor,
  refreshJWTTokens,
} from "@src/shared/axios/interceptors";
import { BASE_API_URL } from "@env";

const instance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(authorizationTokenInterceptor, error =>
  Promise.reject(error),
);

instance.interceptors.response.use(
  res => res,
  err => refreshJWTTokens(err, instance),
);

export default instance;
