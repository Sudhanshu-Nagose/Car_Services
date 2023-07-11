import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionPresets
} from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import Setting from "./Setting";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      defaultStatus="closed"
      screenOptions={{
        drawerType: "front",
        drawerStyle: { width: "80%" },
        headerShown: false
      }}>
      <Drawer.Screen name="Dashboard" component={BottomTabNavigator} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
