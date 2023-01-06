import React, { useEffect } from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator
      headerMode="screen"
      screenOptions={{ cardStyleInterpolator: CardStyleInterpolators }}
    >
      <SettingStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingStack.Screen name="Favourites" component={() => null} />
    </SettingStack.Navigator>
  );
};
