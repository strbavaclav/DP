import { GluestackUIProvider } from "@gluestack-ui/themed";
import "./src/services/i18next";
import { config } from "./config/gluestack-ui.config";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from "./src/navigation/auth";
import { AuthProvider } from "./src/context/authContext";
import { AppProvider } from "./src/context/appContext";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <AuthProvider>
          <AppProvider>
            <AuthStackNavigator />
          </AppProvider>
        </AuthProvider>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
