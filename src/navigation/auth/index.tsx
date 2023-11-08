import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "screens/auth/login/LoginScreen";
import RegisterScreen from "screens/auth/register/RegisterScreen";
import { StackAnimationTypes } from "react-native-screens";

export type AuthStackParams = {
  Register: undefined;
  Login: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const screenOptions = {
  headerShown: false,
  animation: "simple_push" as StackAnimationTypes,
};

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};
