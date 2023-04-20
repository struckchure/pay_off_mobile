import React from "react";
import { Image, Text, View } from "react-native";
import { useNavigate } from "react-router-native";

import useAuth from "../services/auth/hooks";

export default function SplashScreen() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  setTimeout(() => {
    if (isAuthenticated) navigate("dashboard");
    else navigate("onboarding");
  }, 3000);

  return (
    <View className="bg-white h-screen">
      <View className="flex flex-row w-fit h-fit m-auto">
        <Image
          source={require("../assets/img/pay_off.png")}
          className="w-10 h-10 rounded-lg"
        />
        <Text className="text-3xl text-black m-auto w-fit text-center font-space-mono">
          Pay Off
        </Text>
      </View>
    </View>
  );
}
