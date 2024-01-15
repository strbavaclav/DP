import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DrawerScreenWrapper from "components/navigation/DrawerScreenWrapper";

const AboutScreen = () => {
  return (
    <DrawerScreenWrapper>
      <View>
        <Text>AboutScreen</Text>
      </View>
    </DrawerScreenWrapper>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
