import React from "react";
import { Button, Div, Header, Icon, Text } from "react-native-magnus";
import { useNavigate } from "react-router-native";

import BaseLayout from "@src/components/layouts/BaseLayout";
import useAuth from "@src/services/auth/hooks";

export default function SettingScreen() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <Header
        p="lg"
        bg="transparent"
        prefix={
          <Button bg="transparent" onPress={() => navigate(-1)}>
            <Icon
              name="arrow-left"
              fontFamily="Feather"
              fontSize="4xl"
              color="white"
            />
          </Button>
        }
        color="black"
        textAlign="left">
        <Text color="white" fontSize={"xl"}>
          Settings
        </Text>
      </Header>

      <BaseLayout.Container>
        <Div>
          <Button
            bg="gray800"
            block
            color="white"
            h={60}
            mb={10}
            rounded={"xl"}>
            Support
          </Button>

          <Button
            bg="gray800"
            block
            color="white"
            h={60}
            mb={10}
            rounded={"xl"}>
            About
          </Button>

          <Button
            bg="gray800"
            block
            color="white"
            h={60}
            mb={10}
            onPress={logout}
            rounded={"xl"}>
            Log out
          </Button>
        </Div>
      </BaseLayout.Container>
    </BaseLayout>
  );
}
