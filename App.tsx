import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  GluestackUIProvider,
  Text,
  Box,
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <Box width="100%" justifyContent="center" alignItems="center">
          <Text>Open up App.js to start working on your app!</Text>
        </Box>
        <Alert mx="$2.5" action="info" variant="solid">
          <AlertIcon as={InfoIcon} mr="$3" />
          <AlertText>TEST</AlertText>
        </Alert>
        <StatusBar />
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
