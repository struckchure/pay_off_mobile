import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocation, useNavigate } from "react-router-native";

import BaseLayout from "../../comonents/layouts/BaseLayout";
import Button from "../../comonents/ui/Button";
import Input from "../../comonents/ui/Input";
import useAuth from "../../services/auth/hooks";

export default function LoginScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userType } = state;

  const { isAuthenticated, login } = useAuth();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    login({ username, password });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <BaseLayout>
      <View className="h-screen w-full">
        <View className="flex flex-row justify-between items-start h-[20%] w-full p-4">
          <Text className="text-primary-100 text-xl font-space-mono">
            Pay Off
          </Text>
        </View>

        <View className="p-4 w-full h-full items-center justify-start">
          <View className="flex flex-col items-start justify-start">
            <Text className="text-primary-100 text-2xl font-space-mono">
              Welcome back
            </Text>
            <Text className="text-black">
              We missed you while you were away, let’s pick up from where we
              left off
            </Text>
          </View>

          <View className="flex flex-col items-start justify-start h-fit w-full py-10">
            <Input
              label="Email address"
              value={username}
              onChangeText={setUsername}
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChangeText={setPassword}
            />

            {/* <Button>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row gap-2 items-center">
                  <View className="bg-primary-100 p-2 rounded-lg">
                    <MCIcon name="line-scan" color={"white"} />
                  </View>
                  <Text className="text-primary-100 text-lg">
                    Login with biometrics
                  </Text>
                </View>
                <MCIcon name="chevron-right" color={"#721DB4"} />
              </View>
            </Button> */}

            <Button
              containerClassName="bg-primary-100 border-0 flex flex-row justify-center items-center"
              onClick={handleLogin}>
              <Text className="text-white mx-4 w-fit font-space-mono-regular">
                Login
              </Text>
              <MCIcon name="arrow-right" color={"white"} />
            </Button>

            <View className="mx-auto flex flex-row items-center justify-center">
              <Text className="text-gray-700">Don't have an account?</Text>
              <Text
                className="text-primary-200 mx-2"
                onPress={() => {
                  navigate("/auth/register/", { state: { userType } });
                }}>
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </View>
    </BaseLayout>
  );
}
