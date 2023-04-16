import { Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useNavigate } from "react-router-native";

import BaseLayout from "../comonents/layouts/BaseLayout";
import Button from "../comonents/ui/Button";
import { USER_TYPES } from "../constants";

export default function OnboardingScreen() {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <View className="h-screen">
        <View className="flex flex-row justify-between items-start h-[20%] w-full p-4">
          <Text className="text-primary-100 text-xl font-space-mono">
            Pay Off
          </Text>
        </View>

        <View className="flex flex-col justify-start items-start gap-5 px-4">
          <View>
            <Text className="text-primary-100 font-bold text-xl font-space-mono">
              What would you like to use Pay-Less for?
            </Text>

            <Text className="text-md text-gray-700 font-space-mono">
              There is a Pay-Less account for everyone!
            </Text>
          </View>

          <View className="w-full space-y-4">
            <Button
              onClick={() => {
                navigate("/auth/login/", {
                  state: { userType: USER_TYPES.CUSTOMER },
                });
              }}
              containerClassName="w-[94%] border-[0.75px] border-gray-300 rounded-lg p-2">
              <View className="w-[80%] flex flex-row items-start justify-start gap-2">
                <View className="p-2 rounded-lg bg-[#F1E9F8]">
                  <EntypoIcon name="shopping-cart" size={20} color="#721DB4" />
                </View>

                <View className="flex flex-col items-start justify-start gap-1">
                  <Text className="text-gray-900 text-xl">Make Payments</Text>
                  <Text className="text-[#808080]">
                    As a customer you can pay bills, make purchases and payment
                    with other merchants that are registered on the Pay-Less app
                  </Text>
                </View>
              </View>
            </Button>

            <Button
              onClick={() => {
                navigate("/auth/login/", {
                  state: { userType: USER_TYPES.MERCHANT },
                });
              }}
              containerClassName="w-[94%] border-[0.5px] border-gray-300 rounded-lg p-2">
              <View className="w-[80%] flex flex-row items-start justify-start gap-2">
                <View className="p-2 rounded-lg bg-[#F1E9F8]">
                  <EntypoIcon name="shop" size={20} color="#721DB4" />
                </View>

                <View className="flex flex-col items-start justify-start gap-1">
                  <Text className="text-gray-900 text-xl">
                    Recieve Payments
                  </Text>
                  <Text className="text-[#808080]">
                    A Merchant account allows you simplify the process of paying
                    for your commodities and services, simply by allowing other
                    users, scan their biometric on your Pay-Less App
                  </Text>
                </View>
              </View>
            </Button>
          </View>
        </View>
      </View>
    </BaseLayout>
  );
}
