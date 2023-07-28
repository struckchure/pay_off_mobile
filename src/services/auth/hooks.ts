import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { useNavigate } from "react-router-native";
import * as Yup from "yup";

import AuthService from "@src/services/auth";
import { LoginSchema, RegisterSchema } from "@src/services/auth/schema";
import {
  AuthResponse,
  LoginProps,
  RegisterProps,
  UserInterface,
} from "@src/services/auth/types";
import { Storage } from "@src/shared/storage";

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
  }, []);

  const { mutate: _login, isLoading: isLoginLoading } = useMutation({
    mutationFn: (props: LoginProps) => authService.loginUser(props),
    onMutate: () => {},
    onSuccess: async ({
      data,
      status,
    }: {
      data: AuthResponse;
      status: number;
    }) => {
      if (status === 200) {
        await storage.set("accessToken", data.tokens.accessToken);
        await storage.set("refreshToken", data.tokens.refreshToken);
        await storage.set("user", JSON.stringify(data));

        setIsAuthenticated(true);
      } else setIsAuthenticated(false);
    },
    onError: (error: AxiosError<any> | Error) => {
      if (error instanceof AxiosError) {
        Toast.show({
          type: "error",
          text1: error?.response?.data?.message || error.message,
        });
      } else {
        Toast.show({
          type: "error",
          text1: error.message,
        });
      }
    },
  });

  const login = async (props: LoginProps) => {
    try {
      return _login(await LoginSchema.validate(props));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Toast.show({
          type: "error",
          text1: error?.message,
        });
      }
    }
  };

  const { mutate: _register, isLoading: isRegisterLoading } = useMutation({
    mutationFn: (props: RegisterProps) => authService.registerUser(props),
    onSuccess: async ({
      data,
      status,
    }: {
      data: AuthResponse;
      status: number;
    }) => {
      if (status === 201) {
        await storage.set("accessToken", data.tokens.accessToken);
        await storage.set("refreshToken", data.tokens.refreshToken);
        await storage.set("user", JSON.stringify(data));

        setIsAuthenticated(true);
        navgigate("/dashboard");
      } else setIsAuthenticated(false);
    },
    onError: (error: AxiosError<any>) => {
      Toast.show({
        type: "error",
        text1: error?.response?.data?.message || error.message,
      });
    },
  });

  const register = async (props: RegisterProps) => {
    try {
      return _register(await RegisterSchema.validate(props));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Toast.show({
          type: "error",
          text1: error?.message,
        });
      }
    }
  };

  const logout = async () => {
    await storage.remove("accessToken");
    await storage.remove("refreshToken");
    await storage.remove("user");

    navgigate("/auth/login");
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
