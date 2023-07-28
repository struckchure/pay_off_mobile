import React, { useEffect, useState } from "react";
import { Button, Div, Input, Text } from "react-native-magnus";
import { useNavigate } from "react-router-native";

import BaseLayout from "@src/components/layouts/BaseLayout";
import useAuth from "@src/services/auth/hooks";

export default function LoginScreen() {
  const navigate = useNavigate();

  const { isAuthenticated, login } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => login({ email, password });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <BaseLayout>
      <Div p={20}>
        <Div h={150}>
          <Text fontSize={"4xl"} color="white" fontFamily="SpaceMono-Regular">
            Pay Off
          </Text>
        </Div>

        <Div>
          <Text fontSize={"2xl"} color="white" fontFamily="SpaceMono-Regular">
            Welcome Back!
          </Text>
          <Text color="white">
            We missed you while you were away, let’s pick up from where we left
            off
          </Text>
        </Div>

        <Div alignItems="center" justifyContent="flex-start" py={"xl"}>
          <Input
            bg="gray800"
            rounded={"xl"}
            borderColor="transparent"
            color="white"
            px={"xl"}
            mt={"md"}
            onChangeText={setEmail}
            placeholder="Email address"
            value={email}
          />

          <Input
            bg="gray800"
            rounded={"xl"}
            borderColor="transparent"
            color="white"
            px={"xl"}
            mt={"md"}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            value={password}
          />

          <Button
            block
            fontFamily="SpaceMono-Regular"
            mt={"md"}
            onPress={handleLogin}
            rounded={"xl"}>
            Login
          </Button>

          <Div justifyContent="center" alignItems="center" row py={"xl"}>
            <Text color="white" fontSize={"xl"} fontFamily="SpaceMono-Regular">
              Don't have an account?
            </Text>
            <Button
              bg="transparent"
              color="blue300"
              fontFamily="SpaceMono-Regular"
              fontSize={"xl"}
              mx={"md"}
              onPress={() => navigate("/auth/register/")}
              p={"none"}>
              Sign Up
            </Button>
          </Div>
        </Div>
      </Div>
    </BaseLayout>
  );
}
