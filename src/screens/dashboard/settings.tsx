import React from "react";
import { Text, View } from "react-native";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

import BaseLayout from "../../comonents/layouts/BaseLayout";
import Button from "../../comonents/ui/Button";
import useAuth from "../../services/auth/hooks";

export default function SettingScreen() {
  const { logout } = useAuth();

  return (
    <BaseLayout>
      <View className="h-screen">
        <View className="py-2 px-4">
          <Button containerClassName="gap-2 p-0 m-0 w-[80px] border-0 flex flex-row items-center">
            <MCIcon name="arrow-left" color={"black"} size={20} />
            <Text className="font-bold text-lg text-black tracking-wide">
              Settings
            </Text>
          </Button>
        </View>

        <View className="px-6 h-[70%]">
          <Text>Mid</Text>
        </View>

        <View className="px-6">
          <Button
            containerClassName="bg-primary-100 border-0 flex flex-row justify-center items-center"
            onClick={logout}>
            <Text className="text-white mx-4 w-fit font-space-mono-regular">
              Log out
            </Text>
            <MCIcon name="arrow-right" color={"white"} />
          </Button>
        </View>
      </View>
    </BaseLayout>
  );
}
