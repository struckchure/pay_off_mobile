import * as Sentry from "@sentry/react-native";
import React from "react";
import { Dimensions, StatusBar, View } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import { SENTRY_DSN } from "@env";
import MagnusUIProvider from "@src/components/providers/magus-ui.provider";
import ReactQueryProvider from "@src/components/providers/react-query.provider";
import Router from "@src/router";

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
});

function App(): JSX.Element {
  const windowWidth = Dimensions.get("screen").width;
  const windowHeight = Dimensions.get("screen").height;

  return (
    <ReactQueryProvider>
      <MagnusUIProvider>
        <View className={`w-[${windowWidth}] h-[${windowHeight}]`}>
          <StatusBar />
          <Router />
        </View>
        <Toast />
      </MagnusUIProvider>
    </ReactQueryProvider>
  );
}

export default Sentry.wrap(App);
