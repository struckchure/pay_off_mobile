import React, { useState } from "react";
import {
  Button,
  Div,
  Icon,
  Image,
  Input,
  Modal,
  Text,
} from "react-native-magnus";

import BaseLayout from "@src/components/layouts/BaseLayout";
import useAuth from "@src/services/auth/hooks";
import useTransaction from "@src/services/transaction/hooks";
import useWallet from "@src/services/wallet/hooks";
import { formatCurrency } from "@src/shared/utils";

export default function DashboardScreen() {
  const { user } = useAuth();
  const { wallet, fundWallet } = useWallet();
  const { transactions } = useTransaction({ transactionStatus: "SUCCESSFUL" });

  const userAvatar: string =
    "https://pbs.twimg.com/profile_images/1621123266176815105/C36lNTho_400x400.jpg";

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
                <Div p={"lg"}>
                  <Text color="white">{wallet?.accountNumber}</Text>
                  <Text color="white">{`${user?.firstName} ${user?.lastName}`}</Text>
                  <Text color="white">{wallet?.bankName}</Text>
                </Div>
                <Text color="white" fontSize={"3xl"}>
                  OR
                </Text>
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
                  setDepositAmount("0");
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
                rounded={"circle"}
                w={40}
                h={40}
              />
            </Button>

            <Text mx={"lg"} fontWeight="700" fontSize={"xl"} color="white">
              Hi, {user?.firstName}
            </Text>
          </Div>
        </Div>

        <Div>
          <Text
            color="white"
            fontSize={"4xl"}
            fontFamily="SpaceMono-Regular"
            my={"lg"}>
            {formatCurrency(wallet?.balance || 0)}
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
                <Div row justifyContent="space-between" alignItems="center">
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

                  <Text mx={"md"} color="white">
                    {transaction.description}
                  </Text>
                </Div>

                <Text color="white">{formatCurrency(transaction.amount)}</Text>
              </Div>
            ))}
          </Div>
        </Div>
      </BaseLayout.Container>
    </BaseLayout>
  );
}
