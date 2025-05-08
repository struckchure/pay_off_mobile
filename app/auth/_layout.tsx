import { Slot, Stack } from "expo-router";
import React, { ReactNode } from "react";
import { ScrollView } from "react-native";
import { Div } from "react-native-magnus";

interface BaseLayoutProps {
  children?: ReactNode;
}

function Container(props: Pick<BaseLayoutProps, "children">) {
  return (
    <Div px={20} py={40}>
      {props.children}
    </Div>
  );
}

export default function BaseLayout() {
  return (
    <ScrollView>
      <Stack.Screen options={{ headerShown: false }} />

      <Container>
        <Slot />
      </Container>
    </ScrollView>
  );
}
