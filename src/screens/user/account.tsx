import React from "react";
import { Button, Div } from "react-native-magnus";

import BaseLayout from "@src/components/layouts/BaseLayout";
import useAuth from "@src/services/auth/hooks";

export default function AccountScreen() {
  const { logout } = useAuth();

  return (
    <BaseLayout>
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
