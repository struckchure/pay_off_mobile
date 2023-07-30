import React, { useState } from "react";
import { Alert } from "react-native";
import { Button, Div, Input, Text } from "react-native-magnus";
import { useNavigate } from "react-router-native";

import BaseLayout from "@src/components/layouts/BaseLayout";
import useAuth from "@src/services/auth/hooks";

export default function RegisterScreen() {
  const { register } = useAuth();

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = () => {
    if (password !== confirmPassword) Alert.alert("password mismatch");
    else register({ firstName, lastName, email, password });
  };

  return (
    <BaseLayout>
      <BaseLayout.Container>
        <Div h={150}>
          <Text fontSize={"4xl"} color="white" fontFamily="SpaceMono-Regular">
            Pay Off
          </Text>
        </Div>

        <Div>
          <Text fontSize={"2xl"} color="white" fontFamily="SpaceMono-Regular">
            Get started
          </Text>
          <Text color="white">We're thrilled to have you onboard!</Text>
        </Div>

        <Div alignItems="center" justifyContent="flex-start" py={"xl"}>
          <Input
            bg="gray800"
            rounded={"xl"}
            borderColor="transparent"
            color="white"
            px={"xl"}
            mt={"md"}
            onChangeText={setFirstName}
            placeholder="First name"
            value={firstName}
          />

          <Input
            bg="gray800"
            rounded={"xl"}
            borderColor="transparent"
            color="white"
            px={"xl"}
            mt={"md"}
            onChangeText={setLastName}
            placeholder="Last name"
            value={lastName}
          />

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

          <Input
            bg="gray800"
            rounded={"xl"}
            borderColor="transparent"
            color="white"
            px={"xl"}
            mt={"md"}
            onChangeText={setConfirmPassword}
            placeholder="Confirm password"
            secureTextEntry
            value={confirmPassword}
          />

          <Button
            block
            fontFamily="SpaceMono-Regular"
            mt={"md"}
            onPress={handleRegister}
            rounded={"xl"}>
            Register
          </Button>

          <Div justifyContent="center" alignItems="center" row py={"xl"}>
            <Text color="white" fontSize={"xl"} fontFamily="SpaceMono-Regular">
              Already have an account?
            </Text>
            <Button
              bg="transparent"
              color="blue300"
              fontFamily="SpaceMono-Regular"
              fontSize={"xl"}
              mx={"md"}
              onPress={() => navigate("/auth/login/")}
              p={"none"}>
              Sign In
            </Button>
          </Div>
        </Div>
      </BaseLayout.Container>
    </BaseLayout>
  );
}
