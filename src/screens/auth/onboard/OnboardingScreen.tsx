import { CommonActions, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "navigation/root";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const OnboardingScreen = () => {
  const [userData, setUserData] = useState({
    age: "",
    gender: "",
    dietaryPreference: "",
    healthGoal: "",
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleInputChange = (name: string, value: string) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(userData);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "MainNavigator" }],
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Age:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("age", value)}
        value={userData.age}
      />

      <Text style={styles.question}>Gender:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("gender", value)}
        value={userData.gender}
      />

      <Text style={styles.question}>Dietary Preference:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("dietaryPreference", value)}
        value={userData.dietaryPreference}
      />

      <Text style={styles.question}>Health Goal:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("healthGoal", value)}
        value={userData.healthGoal}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  question: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
  },
});

export default OnboardingScreen;
