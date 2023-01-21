import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator
      headerMode="screen"
      screenOptions={{ cardStyleInterpolators: CardStyleInterpolators }}
    >
      <SettingStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingStack.Screen name="Camera" component={CameraScreen} />
    </SettingStack.Navigator>
  );
};
