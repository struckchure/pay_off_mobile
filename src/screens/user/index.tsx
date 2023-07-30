import React from "react";
import { Icon } from "react-native-magnus";

import BottomNavigation from "@src/components/ui/BottomNav";
import AccountScreen from "@src/screens/user/account";
import DashboardScreen from "@src/screens/user/dashboard";

export default function MainScreen() {
  return (
    <BottomNavigation
      menuItems={[
        {
          icon: (
            <Icon
              fontFamily="AntDesign"
              name="home"
              color="white"
              fontSize={"4xl"}
            />
          ),
          component: <DashboardScreen />,
        },
        {
          icon: (
            <Icon
              fontFamily="AntDesign"
              name="user"
              color="white"
              fontSize={"4xl"}
            />
          ),
          component: <AccountScreen />,
        },
      ]}
    />
  );
}
