import React, { ReactNode, useState } from "react";
import { useWindowDimensions } from "react-native";
import { Button, Div } from "react-native-magnus";

interface BottomNavigationProps {
  menuItems: { icon: ReactNode; component: ReactNode }[];
}

export default function BottomNavigation(props: BottomNavigationProps) {
  const { height } = useWindowDimensions();

  const [currentComponentIndex, setCurrentComponentIndex] = useState<number>(0);

  return (
    <>
      <Div h={0.9 * height}>
        {props && props.menuItems[currentComponentIndex].component}
      </Div>
      <Div
        h={0.1 * height}
        row
        alignItems="center"
        justifyContent="space-evenly"
        bg="gray800">
        {props.menuItems.map((prop, index) => (
          <Button
            h={0.08 * height}
            key={index}
            bg={"transparent"}
            onPress={() => setCurrentComponentIndex(index)}
            flex={1}>
            {prop.icon}
          </Button>
        ))}
      </Div>
    </>
  );
}
