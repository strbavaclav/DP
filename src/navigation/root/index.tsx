import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackNavigator } from "navigation/auth";
import { MainTabNavigator } from "navigation/main";

export type RootStackParams = {
  AuthNavigator: undefined;
  MainNavigator: undefined;
};

const RootNavigator = createNativeStackNavigator<RootStackParams>();

const screnOptions = {
  headerShown: false,
};

export const RootStackNavigator = () => {
  return (
    <RootNavigator.Navigator screenOptions={screnOptions}>
      <RootNavigator.Screen
        name="AuthNavigator"
        component={AuthStackNavigator}
      />
      <RootNavigator.Screen name="MainNavigator" component={MainTabNavigator} />
    </RootNavigator.Navigator>
  );
};
