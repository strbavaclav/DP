import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "screens/auth/login/LoginScreen";
import RegisterScreen from "../../screens/auth/register/RegisterScreen";

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};
