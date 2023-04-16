import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import AuthService from ".";
import {
  LoginProps,
  AuthResponse,
  RegisterProps,
  UserInterface,
} from "./types";
import { Storage } from "../../utils";
import { useNavigate } from "react-router-native";

const authService = new AuthService();
const storage = new Storage();

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserInterface>();

  const navgigate = useNavigate();

  useEffect(() => {
    storage.get("accessToken").then(token => {
      if (token) setIsAuthenticated(true);
    });

    storage.get("user").then((userData: any) => {
      if (userData) setUser(JSON.parse(userData));
    });
  }, [storage.get("accessToken"), storage.get("user")]);

  const { mutate: login, isLoading: isLoginLoading } = useMutation({
    mutationFn: (props: LoginProps) => authService.loginUser(props),
    onSuccess: async ({
      data,
      status,
    }: {
      data: AuthResponse;
      status: number;
    }) => {
      if (status === 200) {
        await storage.set("accessToken", data.tokens.access);
        await storage.set("refreshToken", data.tokens.refresh);
        await storage.set("user", JSON.stringify(data));

        setIsAuthenticated(true);
      } else setIsAuthenticated(false);
    },
  });

  const { mutate: register, isLoading: isRegisterLoading } = useMutation({
    mutationFn: (props: RegisterProps) => authService.registerUser(props),
    onSuccess: async ({
      data,
      status,
    }: {
      data: AuthResponse;
      status: number;
    }) => {
      if (status === 201) {
        await storage.set("accessToken", data.tokens.access);
        await storage.set("refreshToken", data.tokens.refresh);
        await storage.set("user", JSON.stringify(data));

        setIsAuthenticated(true);
        navgigate("/dashboard");
      } else setIsAuthenticated(false);
    },
  });

  const logout = async () => {
    await storage.remove("accessToken");
    await storage.remove("refreshToken");
    await storage.remove("user");

    navgigate("/onboarding");
  };

  return {
    login,
    register,
    logout,
    user,
    isLoading: isLoginLoading && isRegisterLoading,
    isAuthenticated,
  };
}
