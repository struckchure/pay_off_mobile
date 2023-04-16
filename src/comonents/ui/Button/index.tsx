import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  children?: ReactNode | string;
  onClick?: Function;
  containerClassName?: string;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const ButtonContent = (className?: string) => {
    switch (typeof props?.children) {
      case "string":
        return (
          <Text
            className={`text-md font-space-mono-regular ${className || ""}`}>
            {props.children}
          </Text>
        );
    }
    return props.children || <View />;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        props.onClick && props.onClick();
      }}
      className={`min-w-[100px] my-2 w-full min-h-fit rounded-lg px-4 py-4 border-[1px] border-primary-300 ${
        props?.containerClassName || ""
      }`}>
      {ButtonContent(props.className)}
    </TouchableOpacity>
  );
}
