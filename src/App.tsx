import * as Sentry from "@sentry/react-native";
import React from "react";
import { Dimensions, StatusBar, View } from "react-native";
import Config from "react-native-config";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import ReactQueryProvider from "./comonents/providers/react-query.provider";
import Router from "./router";

Sentry.init({
  dsn: Config.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

function App(): JSX.Element {
  const windowWidth = Dimensions.get("screen").width;
  const windowHeight = Dimensions.get("screen").height;

  return (
    <ReactQueryProvider>
      <View className={`w-[${windowWidth}] h-[${windowHeight}]`}>
        <StatusBar />
        <Router />
      </View>

      <Toast />
    </ReactQueryProvider>
  );
}

export default Sentry.wrap(App);
