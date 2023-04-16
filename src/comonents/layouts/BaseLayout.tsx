import { ReactNode, useEffect } from "react";
import { BackHandler, ScrollView, View } from "react-native";
import { useNavigate } from "react-router-native";

interface BaseLayoutProps {
  children?: ReactNode;
}

export default function BaseLayout(props: BaseLayoutProps) {
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
    <View className="h-screen w-full bg-gray-50">
      <ScrollView>{props?.children}</ScrollView>
    </View>
  );
}
