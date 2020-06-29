import React from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../helpers/Constants";

interface CustomButtonProps {
  onPress: () => void;
  text: string;
  type?: "filled" | "transparent";
  bgColor?: string;
  textColor?: string;
  textFontFamily?: string;
  textSize?: number;
  borderRadius?: number;
  verticalPadding?: number;
  width?: number;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  text,
  type = "filled",
  textColor = "#ffffff",
  textFontFamily = "Nunito-Bold",
  bgColor = "#433B4A",
  textSize = 16,
  borderRadius = 8,
  verticalPadding = 8,
  width = SCREEN_WIDTH / 2.2,
}) => {
  const styles = StyleSheet.create({
    btn_container: {
      backgroundColor: `${type === "filled" ? bgColor : "transparent"}`,
      paddingVertical: verticalPadding,
      width: width,
      borderRadius: borderRadius,
    },
    btn_text: {
      color: textColor,
      fontSize: textSize,
      textAlign: "center",
      fontFamily: textFontFamily,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.btn_container}>
        <Text style={styles.btn_text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
