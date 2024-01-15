import { Ionicons } from "@expo/vector-icons";
import { HStack, Text } from "@gluestack-ui/themed";
import { useDrawerProgress } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  children: ReactNode;
};
const DrawerScreenWrapper: React.FC<Props> = ({ children }) => {
  const progress = useDrawerProgress();

  const navigation = useNavigation();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { scale: interpolate(progress.value, [0, 1], [1, 0.8], "clamp") },
      {
        rotateY:
          interpolate(progress.value, [0, 1], [0, -0.2], "clamp") + "rad",
      },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [0, 26], "clamp"),
  }));
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: { width: -3, height: 6 },
          shadowOpacity: 0.5,
          shadowRadius: 8,
        },
        animatedStyle,
      ]}
    >
      <HStack style={{ marginTop: 40, marginLeft: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name={"menu"} size={26} color={"#10b981"} />
        </TouchableOpacity>
        <Text ml={130} mt={5} color="green">
          aChive
        </Text>
      </HStack>
      {children}
    </Animated.View>
  );
};

export default DrawerScreenWrapper;
