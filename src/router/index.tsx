import { NativeRouter, Route, Routes } from "react-router-native";

import SplashScreen from "../screens";
import OnboardingScreen from "../screens/onboarding";

import LoginScreen from "../screens/auth/login";
import RegisterScreen from "../screens/auth/register";

import DashboardScreen from "../screens/dashboard";
import SettingScreen from "../screens/dashboard/settings";

export default function Router() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding/" element={<OnboardingScreen />} />

        <Route path="/auth/login/" element={<LoginScreen />} />
        <Route path="/auth/register/" element={<RegisterScreen />} />

        <Route path="/dashboard/" element={<DashboardScreen />} />
        <Route path="/settings/" element={<SettingScreen />} />
      </Routes>
    </NativeRouter>
  );
}
