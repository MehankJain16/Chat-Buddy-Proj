import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, View } from "react-native";
import { BackgroundImage } from "../../components/BackgroundImage";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const GetStarted = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor="#E58571" barStyle="light-content" />
      <BackgroundImage imagePath={require("../../../assets/schedule_bg.png")} />
    </SafeAreaView>
  );
};

export default GetStarted;
