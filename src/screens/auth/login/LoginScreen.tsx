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
  Heading,
  Box,
  FormControl,
  Input,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
  VStack,
  FormControlLabel,
  FormControlLabelText,
  InputSlot,
  InputIcon,
  MailIcon,
  LockIcon,
  KeyboardAvoidingView,
  ScrollView,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import OAuthButton from "components/auth/OAuthButton";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Platform, SafeAreaView } from "react-native";
import { AuthStackParams } from "src/navigation/auth";

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <StatusBar style="auto" />
      <Image
        source={require("../../../assets/images/login.png")}
        style={{ width: "100%", height: 300 }}
        resizeMode="contain"
      />
      <Heading>
        Sign in to <Heading color="$primary500">Mealime</Heading>
      </Heading>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        margin={10}
      >
        <VStack
          width={"$full"}
          justifyContent="center"
          alignItems="center"
          gap={10}
          m={10}
        >
          <Box width={"$3/4"}>
            <FormControl
              size="sm"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={false}
            >
              <Input>
                <InputSlot width={"$1/6"} backgroundColor="$primary500">
                  <InputIcon>
                    <MailIcon size="sm" color="white" />
                  </InputIcon>
                </InputSlot>
                <InputSlot width={"$full"}>
                  <InputField
                    width={"$full"}
                    type="text"
                    placeholder="your@mail.com"
                  />
                </InputSlot>
              </Input>

              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </Box>
          <Box width={"$3/4"}>
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={false}
            >
              <Input>
                <InputSlot width={"$1/6"} backgroundColor="$primary500">
                  <InputIcon>
                    <LockIcon color="white" size="sm" />
                  </InputIcon>
                </InputSlot>
                <InputSlot width={"$full"}>
                  <InputField width={"$full"} type="text" placeholder="*****" />
                </InputSlot>
              </Input>

              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </Box>
        </VStack>
      </KeyboardAvoidingView>
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        m={10}
      >
        <ButtonText>Sign in </ButtonText>
        <ButtonIcon as={ChevronsRightIcon} />
      </Button>
      <OAuthButton />
      <HStack justifyContent="center" alignItems="center" mt={20}>
        <Text>Don't have an account? </Text>
        <Link onPress={() => navigation.navigate("Register")}>
          <LinkText color="$primary600">Sign up!</LinkText>
        </Link>
      </HStack>
    </SafeAreaView>
  );
};

export default LoginScreen;
