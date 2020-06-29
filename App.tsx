import React, { useState } from "react";
import { Routes } from "./src/Routes";
import * as Font from "expo-font";
import { AppLoading } from "expo";

interface AppProps {}

const loadAssets = () => {
  return Font.loadAsync({
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
  });
};

const App: React.FC<AppProps> = ({}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return isLoaded ? (
    <Routes />
  ) : (
    <AppLoading startAsync={loadAssets} onFinish={() => setIsLoaded(true)} />
  );
};

export default App;
