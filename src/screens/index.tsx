import React from "react";
import { useWindowDimensions } from "react-native";
import { Div, Image, Text } from "react-native-magnus";
import { useNavigate } from "react-router-native";

import useAuth from "@src/services/auth/hooks";

export default function SplashScreen() {
  const navigate = useNavigate();
  useAuth({
    onAuthSuccess: () => {
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    },
    onAuthFailure: () => {
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
    },
  });

  const { height } = useWindowDimensions();

  return (
    <Div bg="white" justifyContent="center" alignItems="center" h={height}>
      <Div row>
        <Image source={require("../assets/img/pay_off.png")} w={50} h={50} />
        <Text fontFamily="SpaceMono-Regular" color="black" fontSize={"4xl"}>
          Pay Off
        </Text>
      </Div>
    </Div>
  );
}
