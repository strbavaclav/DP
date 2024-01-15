import { Button, View } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParams } from "navigation/main";
import React from "react";
import { Text } from "react-native";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();
  return (
    <View>
      <Text>AAA</Text>
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        m={10}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default HomeScreen;
