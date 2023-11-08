import {
  Button,
  ButtonIcon,
  ButtonText,
  ChevronsRightIcon,
  HStack,
  Link,
  LinkText,
  View,
  Text,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import OAuthButton from "components/auth/OAuthButton";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image } from "react-native";
import { AuthStackParams } from "src/navigation/auth";

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="light" />
      <Image
        source={require("../../../assets/images/background.png")}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Sign in </ButtonText>
        <ButtonIcon as={ChevronsRightIcon} />
      </Button>
      <OAuthButton />
      <HStack justifyContent="center" alignItems="center" mt={20}>
        <Text>Dont have an Account? </Text>
        <Link onPress={() => navigation.navigate("Register")}>
          <LinkText color="$primary600">Sign up!</LinkText>
        </Link>
      </HStack>
    </View>
  );
};

export default LoginScreen;
