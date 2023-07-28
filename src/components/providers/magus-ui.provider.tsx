import React, { ReactNode } from "react";
import { ThemeProvider } from "react-native-magnus";

interface MagnusUIProviderProps {
  children?: ReactNode;
}

export default function MagnusUIProvider({ children }: MagnusUIProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
