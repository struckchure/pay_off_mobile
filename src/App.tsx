import * as Sentry from "@sentry/react-native";
import React, { useEffect } from "react";
import { Linking, StatusBar, useWindowDimensions } from "react-native";
import { Div } from "react-native-magnus";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import { SENTRY_DSN } from "@env";
import MagnusUIProvider from "@src/components/providers/magus-ui.provider";
import ReactQueryProvider from "@src/components/providers/react-query.provider";
import Router from "@src/router";
import deepLinkHandler from "./router/deep-link-handler";

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
});

function App() {
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    Linking.addEventListener("url", deepLinkHandler);

    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);

  return (
    <ReactQueryProvider>
      <MagnusUIProvider>
        <Div w={width} h={height}>
          <StatusBar />
          <Router />
        </Div>
        <Toast />
      </MagnusUIProvider>
    </ReactQueryProvider>
  );
}

export default Sentry.wrap(App);
