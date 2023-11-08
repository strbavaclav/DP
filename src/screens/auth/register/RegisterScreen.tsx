import {
  AlertCircleIcon,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  ChevronsRightIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  HStack,
  Input,
  InputField,
  Link,
  LinkText,
  View,
  Text,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image } from "react-native";

import { AuthStackParams } from "src/navigation/auth";

const RegisterScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="light" />
      <Image
        source={require("../../../assets/images/background.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          transform: [{ scaleX: -1 }],
        }}
      />
      <Box h="$32" w="$72">
        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={false}
        >
          <Input>
            <InputField
              type="text"
              defaultValue="12345"
              placeholder="password"
            />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              Must be at least 6 characters.
            </FormControlHelperText>
          </FormControlHelper>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              At least 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
      </Box>

      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Sign up </ButtonText>
        <ButtonIcon as={ChevronsRightIcon} />
      </Button>

      <HStack justifyContent="center" alignItems="center" mt={20}>
        <Text>Alredy have an account? </Text>
        <Link onPress={() => navigation.navigate("Login")}>
          <LinkText>Log in!</LinkText>
        </Link>
      </HStack>
    </View>
  );
};

export default RegisterScreen;
