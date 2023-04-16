import { Alert, Text, View } from "react-native";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocation, useNavigate } from "react-router-native";

import { useState } from "react";
import BaseLayout from "../../comonents/layouts/BaseLayout";
import Button from "../../comonents/ui/Button";
import Input from "../../comonents/ui/Input";
import useAuth from "../../services/auth/hooks";

export default function RegisterScreen() {
  const { register } = useAuth();

  const navigate = useNavigate();
  const { state } = useLocation();
  const { userType } = state;

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = () => {
    if (password !== confirmPassword) Alert.alert("password mismatch");
    console.log({ username, email, password, user_type: userType });
    register({ username, email, password, user_type: userType });
  };

  return (
    <BaseLayout>
      <View className="h-screen w-full">
        <View className="flex flex-row justify-between items-start h-[20%] w-full p-4">
          <Text className="text-primary-100 text-xl font-rubik">Pay-Less</Text>
        </View>

        <View className="p-4 w-full h-full items-center justify-start">
          <View className="flex flex-col items-start justify-start">
            <Text className="text-primary-100 font-bold text-2xl">
              Get started
            </Text>
            <Text className="text-black">
              Fill in these forms to get started, we can't wait to connect with
              you
            </Text>
          </View>

          <View className="flex flex-col items-start justify-start h-fit w-full py-10">
            <Input
              label="Username"
              value={username}
              onChangeText={setUsername}
            />

            <Input
              label="Email address"
              value={email}
              onChangeText={setEmail}
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChangeText={setPassword}
            />

            <Input
              label="Confirm password"
              type="password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <Button>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row gap-2 items-center">
                  <View className="bg-primary-100 p-2 rounded-lg">
                    <MCIcon name="line-scan" color={"white"} />
                  </View>
                  <Text className="text-primary-100 text-lg">
                    Setup biometrics
                  </Text>
                </View>
                <MCIcon name="chevron-right" color={"#721DB4"} />
              </View>
            </Button>

            <Button
              containerClassName="bg-primary-100 border-0 flex flex-row justify-center items-center"
              onClick={handleRegister}>
              <Text className="text-white mx-4 w-fit">Create account</Text>
              <MCIcon name="arrow-right" color={"white"} />
            </Button>

            <View className="mx-auto flex flex-row items-center justify-center">
              <Text className="text-gray-700">Already have an account?</Text>
              <Text
                className="text-primary-200 mx-2"
                onPress={() => {
                  navigate("/auth/login/", { state: { userType } });
                }}>
                Sign In
              </Text>
            </View>
          </View>
        </View>
      </View>
    </BaseLayout>
  );
}
