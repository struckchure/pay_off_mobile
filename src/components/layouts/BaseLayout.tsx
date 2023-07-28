import React, { ReactNode, useEffect } from "react";
import { BackHandler, ScrollView, View } from "react-native";
import { Div } from "react-native-magnus";
import { useNavigate } from "react-router-native";

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

function BaseLayout(props: BaseLayoutProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      navigate(-1);

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView>
      <View className="h-screen w-full bg-gray-800">{props?.children}</View>
    </ScrollView>
  );
}

export default Object.assign(BaseLayout, { Container });
