import { Box, Button, HStack } from "@gluestack-ui/themed";
import React from "react";
import { Image } from "react-native";

const OAuthButton = () => {
  return (
    <HStack
      width={"$full"}
      alignItems="center"
      justifyContent="center"
      gap={10}
      marginTop={30}
    >
      <Button size="lg" variant="outline">
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/google.png")}
        />
      </Button>
      <Button size="lg" variant="outline">
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/apple.png")}
        />
      </Button>
    </HStack>
  );
};

export default OAuthButton;
