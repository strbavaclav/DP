import { GluestackUIProvider } from "@gluestack-ui/themed";
import "./src/services/i18next";
import { config } from "./config/gluestack-ui.config";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from "./src/navigation/auth";
import { AuthProvider } from "./src/context/authContext";
import { AppProvider } from "./src/context/appContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <AuthProvider>
            <AppProvider>
              <AuthStackNavigator />
            </AppProvider>
          </AuthProvider>
        </NavigationContainer>
      </ApolloProvider>
    </GluestackUIProvider>
  );
}
