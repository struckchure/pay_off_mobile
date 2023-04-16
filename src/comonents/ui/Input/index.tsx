import { TextInput, View } from "react-native";

interface InputProps {
  containerClassName?: string;
  className?: string;
  label?: string;
  type?: "text" | "password";

  value?: string;
  onChangeText?: (value: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <View
      className={`min-w-[100px] w-full min-h-fit my-2 px-4 py-1 border-[1px] border-primary-300 overflow-hidden rounded-lg ${
        props.containerClassName || ""
      }`}>
      <TextInput
        className={`w-full text-black ${props.className || ""}`}
        placeholder={props.label || ""}
        placeholderTextColor={"black"}
        secureTextEntry={props.type === "password"}
        value={props?.value}
        onChangeText={(text: string) => {
          props.onChangeText?.(text);
        }}
      />
    </View>
  );
}
