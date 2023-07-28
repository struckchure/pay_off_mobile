import React, { useState } from "react";
import { Image, View } from "react-native";
import { Button, Div, Icon, Input, Modal, Text } from "react-native-magnus";
import { useNavigate } from "react-router-native";

import BaseLayout from "@src/components/layouts/BaseLayout";
import useAuth from "@src/services/auth/hooks";
import useTransaction from "@src/services/transaction/hooks";
import useWallet from "@src/services/wallet/hooks";

export default function DashboardScreen() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { wallet, fundWallet } = useWallet();
  const { transactions } = useTransaction({ transactionStatus: "PENDING" });

  const userAvatar: string =
    "https://pbs.twimg.com/profile_images/1621123266176815105/C36lNTho_400x400.jpg";
  const userWalletBalance: number = +(wallet?.balance || 0.0);

  const [isDepositModalOpen, setIsDepositModalOpen] = useState<boolean>(false);
  const [depositAmount, setDepositAmount] = useState<string>();

  return (
    <BaseLayout>
      <BaseLayout.Container>
        <Modal isVisible={isDepositModalOpen} bg="gray900" p={20}>
          <Div row justifyContent="flex-end">
            <Button
              onPress={() => setIsDepositModalOpen(!isDepositModalOpen)}
              h={40}
              w={40}
              rounded="circle">
              <Icon name="arrowdown" fontFamily="AntDesign" color="white" />
            </Button>
          </Div>

          <Div py={15}>
            {wallet?.accountNumber && (
              <>
                <View className="p-4">
                  <Text color="white">{wallet?.accountNumber}</Text>
                  <Text color="white">{`${user?.firstName} ${user?.lastName}`}</Text>
                  <Text color="white">{wallet?.bankName}</Text>
                </View>
                <Text color="white">OR</Text>
              </>
            )}

            <Div>
              <Input
                keyboardType="number-pad"
                value={depositAmount}
                onChangeText={setDepositAmount}
              />

              <Button
                block
                my={10}
                onPress={() => {
                  depositAmount && fundWallet({ amount: +depositAmount });
                }}>
                Generate Payment Link
              </Button>
            </Div>
          </Div>
        </Modal>

        <Div row alignItems="center" justifyContent="space-between">
          <Div row>
            <Button bg="transparent" p={"none"}>
              <Image
                source={{ uri: userAvatar }}
                className="w-10 h-10 rounded-full"
              />
            </Button>

            <Text mx={"lg"} fontWeight="700" fontSize={"xl"} color="white">
              Hi, {user?.firstName}
            </Text>
          </Div>

          <Div>
            <Button
              bg="transparent"
              p={"none"}
              onPress={() => navigate("/settings/")}>
              <Icon
                fontFamily="AntDesign"
                name="setting"
                color="white"
                fontSize={"6xl"}
              />
            </Button>
          </Div>
        </Div>

        <Div>
          <Text color="white" fontSize={"4xl"} my={"lg"}>
            &#8358;{userWalletBalance.toFixed(2)}
          </Text>

          <Div py={"lg"} row>
            <Button rounded={"xl"} px="xl" mr={10} onPress={() => {}}>
              Pay
            </Button>

            <Button
              rounded={"xl"}
              px="xl"
              mr={10}
              onPress={() => setIsDepositModalOpen(!isDepositModalOpen)}>
              Deposit
            </Button>

            <Button rounded={"xl"} px="xl" mr={10} onPress={() => {}}>
              Withdraw
            </Button>
          </Div>

          <Div>
            <Text color="white" fontSize={"xl"} py={"xl"}>
              Recent Transactions
            </Text>
            {transactions.map((transaction, index) => (
              <Div
                key={index}
                row
                alignItems="center"
                justifyContent="space-between"
                bg="gray800"
                rounded={"xl"}
                p={"lg"}
                mb={"sm"}>
                <View className="flex flex-row items-center justify-start">
                  <Icon
                    name={
                      transaction.transactionType === "CREDIT"
                        ? "arrow-down-left"
                        : "arrow-up-right"
                    }
                    fontFamily="Feather"
                    color={
                      transaction.transactionType === "CREDIT" ? "white" : "red"
                    }
                    bg="blue600"
                    p={7}
                    rounded={"lg"}
                  />

                  <View className="flex flex-col items-start justify-start mx-2">
                    <Text color="white">{transaction.description}</Text>
                  </View>
                </View>

                <Text color="white">
                  &#8358;{(+transaction.amount).toFixed(2)}
                </Text>
              </Div>
            ))}
          </Div>
        </Div>
      </BaseLayout.Container>
    </BaseLayout>
  );
}
