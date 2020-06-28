import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../../screens/auth/GetStarted";
import Login from "../../screens/auth/Login";
import Verify from "../../screens/auth/Verify";
import Create from "../../screens/auth/Create";

interface AuthStackProps {}

const Stack = createStackNavigator();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
};
