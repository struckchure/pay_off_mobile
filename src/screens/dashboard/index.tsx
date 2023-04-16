import { useState } from "react";
import { Image, Text, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import IonIcon from "react-native-vector-icons/Ionicons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigate } from "react-router-native";
import BaseLayout from "../../comonents/layouts/BaseLayout";
import Button from "../../comonents/ui/Button";
import useAuth from "../../services/auth/hooks";
import useWallet from "../../services/payment/hooks";

interface Transaction {
  id?: string;
  transactionType: "CREDIT" | "DEBIT";
  amount: number;
  from?: string | null;
  to?: string | null;
  description?: string;
}

export default function DashboardScreen() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { wallet } = useWallet();

  const userAvatar: string =
    "https://pbs.twimg.com/profile_images/1621123266176815105/C36lNTho_400x400.jpg";
  const userName: string = user?.username || "";
  const userType: string = user?.user_type || "";
  const userWalletBalance: number = wallet?.balance || 0.0;

  const userTransactionHistory: Transaction[] = [
    {
      id: "id-1",
      transactionType: "CREDIT",
      amount: 100,
      from: "Yusuf Gideon",
      to: "Mohammed",
    },
    {
      id: "id-2",
      transactionType: "DEBIT",
      amount: 80,
      from: "Mohammed",
      to: "Exclusive Stores",
    },
    {
      id: "id-3",
      transactionType: "DEBIT",
      amount: 100,
      from: "Yusuf Gideon",
      to: "Mohammed",
    },
    {
      id: "id-4",
      transactionType: "CREDIT",
      amount: 80,
      from: "Mohammed",
      to: "Exclusive Stores",
    },
  ];

  const userHasEnabledBiometrics: boolean = true;
  const userHasFinishedAccountSetup: boolean = true;

  const [blurUserBalance, setBlurUserBalance] = useState<boolean>(false);

  const generateTransactionDescription = (transaction: Transaction) => {
    if (transaction.transactionType === "CREDIT") {
      return `${transaction.from} sent you ${transaction.amount}`;
    } else if (transaction.transactionType == "DEBIT") {
      return `You sent ${transaction.amount} to ${transaction.to}`;
    }
  };

  return (
    <BaseLayout>
      <View className="flex flex-row justify-between items-center px-6 pt-4">
        <Button containerClassName="flex flex-row items-center gap-2 max-w-[180px] p-0 my-0 border-0">
          <Image
            source={{ uri: userAvatar }}
            className="w-10 h-10 rounded-lg"
          />

          <View className="flex flex-col items-start justify-center">
            <Text className="text-black text-md capitalize font-bold">
              {userName}
            </Text>
            <Text className="text-black text-xs capitalize">{userType}</Text>
          </View>
        </Button>

        <Button
          containerClassName="border-0 p-0 max-w-[30px] min-w-[10px]"
          onClick={() => navigate("/settings/")}>
          <AntIcon name="setting" size={30} color={"black"} />
        </Button>
      </View>

      <View className="flex flex-col justify-start items-center gap-2 p-6">
        <View className="bg-primary-100 rounded-lg w-full h-[167px]">
          <View className="m-auto">
            <Text
              className={`m-auto text-white font-bold text-[40px] blur-lg ${
                blurUserBalance && "text-red"
              }`}
              style={
                blurUserBalance && {
                  color: "#fff0",
                  textShadowColor: "rgba(255,255,255,0.4)",
                  textShadowRadius: 90,
                }
              }>
              {userWalletBalance.toFixed(2)}
            </Text>
            <Button
              containerClassName="flex flex-row items-center justify-center gap-2 w-[120px] border-0 text-lg p-0 m-auto"
              onClick={() => {
                setBlurUserBalance(!blurUserBalance);
              }}>
              <Text className="text-white text-[16px]">Total Balance</Text>
              <AntIcon name="eye" color={"white"} size={20} />
            </Button>
          </View>
        </View>

        {!userHasFinishedAccountSetup && (
          <View className="w-full">
            <Button containerClassName="px-4 flex flex-row items-center justify-center p-0 m-0 h-[80px] w-full">
              <View className="bg-primary-300 p-2 rounded-lg">
                <IonIcon name="ios-warning" color={"red"} size={30} />
              </View>

              <View className="w-[80%] px-2">
                <Text className="font-bold text-md text-black">
                  Finish setting up your account
                </Text>
                <Text className="text-gray-400 text-sm">
                  Set up your 2FA and verify your mail to get started
                </Text>
              </View>
            </Button>
          </View>
        )}

        {!userHasEnabledBiometrics && (
          <View className="w-full">
            <Button containerClassName="px-4 flex flex-row items-center justify-center p-0 m-0 h-[80px] w-full">
              <View className="bg-primary-300 p-2 rounded-lg">
                <IonIcon name="ios-warning" color={"red"} size={30} />
              </View>

              <View className="w-[80%] px-2">
                <Text className="font-bold text-md text-black">
                  Enable biometrics
                </Text>
                <Text className="text-gray-400 text-sm">
                  This will enable us approve transaction decisions later on in
                  your account
                </Text>
              </View>
            </Button>
          </View>
        )}

        <View className="flex flex-row items-center space-x-2 justify-between">
          <Button containerClassName="flex flex-row items-center justify-start p-2 max-w-[50%] w-full mx-1 bg-primary-400 border-0">
            <View className="bg-primary-100 rounded-lg p-2 w-9">
              <Fa5Icon name="paper-plane" size={20} color={"white"} />
            </View>
            <Text className="text-black mx-2">Send payment</Text>
          </Button>

          <Button containerClassName="flex flex-row items-center justify-start p-2 max-w-[50%] w-full mx-1 bg-primary-400 border-0">
            <View className="bg-primary-100 rounded-lg p-2 w-9">
              <IonIcon name="card" size={20} color={"white"} />
            </View>
            <Text className="text-black mx-2">Recieve payment</Text>
          </Button>
        </View>

        <View className="w-full">
          <Button containerClassName="bg-gray-900 border-0 m-0 flex flex-row justify-center items-center">
            <Text className="text-white mx-2 text-[16px]">Pay-On-Site</Text>
            <MCIcon name="line-scan" color={"white"} size={20} />
          </Button>
        </View>

        <View className="w-full">
          <View className="flex flex-row justify-between items-center border-b-2 border-primary-300 py-2">
            <Text className="text-black text-[16px]">Transaction history</Text>
          </View>

          {userTransactionHistory?.length > 0 &&
            userTransactionHistory.map((transaction, index) => (
              <View
                key={index}
                className="flex flex-row items-center justify-between py-4 border-b-2 border-primary-300">
                <View className="flex flex-row items-start justify-start">
                  <View className="p-2 rounded-lg bg-primary-300">
                    <FeatherIcon
                      name={
                        transaction.transactionType === "CREDIT"
                          ? "arrow-down-left"
                          : "arrow-up-right"
                      }
                      size={20}
                      color={
                        transaction.transactionType === "CREDIT"
                          ? "#721DB4"
                          : "red"
                      }
                    />
                  </View>

                  <View className="flex flex-col items-start justify-start mx-2">
                    <Text className="font-semibold text-[15px] text-black">
                      {generateTransactionDescription(transaction)}
                    </Text>
                    <Text className="text-gray-700 text-[13px] capitalize">
                      {transaction.from}
                    </Text>
                  </View>
                </View>

                <Text className="text-black font-bold">
                  {transaction.transactionType === "CREDIT" ? "+" : "-"}{" "}
                  {transaction.amount.toFixed(2)}
                </Text>
              </View>
            ))}
        </View>
      </View>
    </BaseLayout>
  );
}
