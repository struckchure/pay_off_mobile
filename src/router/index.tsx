import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";

import SplashScreen from "@src/screens";

import LoginScreen from "@src/screens/auth/login";
import RegisterScreen from "@src/screens/auth/register";

import DashboardScreen from "@src/screens/dashboard";
import SettingScreen from "@src/screens/dashboard/settings";

export default function Router() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />

        <Route path="/auth/login/" element={<LoginScreen />} />
        <Route path="/auth/register/" element={<RegisterScreen />} />

        <Route path="/dashboard/" element={<DashboardScreen />} />
        <Route path="/settings/" element={<SettingScreen />} />
      </Routes>
    </NativeRouter>
  );
}
