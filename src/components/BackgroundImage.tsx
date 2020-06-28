import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface BackgroundImageProps {
  imagePath: ImageSourcePropType;
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    zIndex: 0,
    width: "100%",
    height: "100%",
  },
});

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imagePath,
}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={imagePath} style={styles.backgroundImage} />
    </View>
  );
};
