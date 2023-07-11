// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
// const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
        <NavigationContainer>
            <BottomTabNavigator/>
        </NavigationContainer>
    );
};

export default AppNavigator;