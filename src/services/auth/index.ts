import axios from "../axios";
import { LoginProps, AuthResponse, RegisterProps } from "./types";

export default class AuthService {
  async loginUser(
    loginProps: LoginProps,
  ): Promise<{ data: AuthResponse; status: number }> {
    const { data, status } = await axios({
      method: "POST",
      url: "/auth/login/",
      data: loginProps,
    });

    return { data, status };
  }

  async registerUser(
    registerProps: RegisterProps,
  ): Promise<{ data: AuthResponse; status: number }> {
    const { data, status } = await axios({
      method: "POST",
      url: "/auth/register/",
      data: registerProps,
    });

    return { data, status };
  }
}
