import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const StyledPressable = styled(Pressable, "py-3");

interface CustomButtonProps extends ComponentProps<typeof StyledPressable> {
  children: string;
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return (
    <StyledPressable {...props}>
      <Text>{children}</Text>
    </StyledPressable>
  );
};

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <CustomButton>button text</CustomButton>
      <StatusBar style="auto" />
    </View>
  );
}
