import React from "react";
import { Dimensions, StatusBar, View } from "react-native";

import ReactQueryProvider from "./comonents/providers/react-query.provider";
import Router from "./router";

export default function App(): JSX.Element {
  const windowWidth = Dimensions.get("screen").width;
  const windowHeight = Dimensions.get("screen").height;

  return (
    <ReactQueryProvider>
      <View className={`w-[${windowWidth}] h-[${windowHeight}]`}>
        <StatusBar />
        <Router />
      </View>
    </ReactQueryProvider>
  );
}
