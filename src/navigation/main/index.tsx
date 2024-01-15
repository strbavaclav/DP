import HomeScreen from "screens/home/HomeScreen";
import {
  BottomTabNavigationOptions,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import ProfileScreen from "screens/core/profile/ProfileScreen";
import MealPlannerScreen from "screens/modules/mealplanning/MealPlannerScreen";
import EducationScreen from "screens/modules/education/EducationScreen";
import { Route, RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CustomDrawer from "components/navigation/CustomDrawer";
import DrawerScreenWrapper from "components/navigation/DrawerScreenWrapper";

type Props = { children: ReactNode };

export type MainTabsParams = {
  Home: undefined;
  Profile: undefined;
  Planner: undefined;
  Education: undefined;
};

export type MainDrawerParams = {
  Main: undefined;
  Settings: undefined;
};

const MainTab = createBottomTabNavigator<MainTabsParams>();
const MainDrawer = createDrawerNavigator<MainDrawerParams>();

const TabScreenOptions = ({
  route,
}: BottomTabScreenProps<
  MainTabsParams,
  keyof MainTabsParams
>): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName: string;
    let iconColor: string;

    if (route.name === "Home") {
      iconName = focused ? "ios-home" : "ios-home-outline";
      iconColor = focused ? "#10b981" : "#555";
    } else if (route.name === "Profile") {
      iconName = focused ? "ios-list" : "ios-list-outline";
      iconColor = focused ? "#10b981" : "#555";
    } else if (route.name === "Planner") {
      iconName = focused ? "ios-list" : "ios-list-outline";
      iconColor = focused ? "#10b981" : "#555";
    } else if (route.name === "Education") {
      iconName = focused ? "ios-list" : "ios-list-outline";
      iconColor = focused ? "#10b981" : "#555";
    } else {
      iconName = "ios-alert";
      iconColor = "#555";
    }

    return <Ionicons name={iconName as "key"} size={size} color={iconColor} />;
  },
  tabBarLabel: route.name,
  tabBarActiveTintColor: "#10b981",
  headerShown: false,
  tabBarStyle: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    borderBottomLeftRadius: 15,
    shadowRadius: 5,
    borderTopWidth: 1,
    backgroundColor: "transparent",
  },
});

export const MainTabNavigator = () => {
  return (
    <DrawerScreenWrapper>
      <MainTab.Navigator
        initialRouteName="Home"
        screenOptions={TabScreenOptions}
      >
        <MainTab.Screen name="Home" component={HomeScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen} />
        <MainTab.Screen name="Planner" component={MealPlannerScreen} />
        <MainTab.Screen name="Education" component={EducationScreen} />
      </MainTab.Navigator>
    </DrawerScreenWrapper>
  );
};

export const MainDrawerNavigator = () => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#10b981", "#46bfa7"]}>
      <MainDrawer.Navigator
        drawerContent={(props) => {
          return <CustomDrawer navigation={props.navigation} />;
        }}
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          overlayColor: `transparent`,
          drawerStyle: {
            flex: 1,
            backgroundColor: "transparent",
            width: "55%",
          },
          sceneContainerStyle: { backgroundColor: "transparent" },
        }}
      >
        <MainDrawer.Screen
          name={"Main"}
          component={MainTabNavigator}
          options={{ headerTitle: "" }}
        />
      </MainDrawer.Navigator>
    </LinearGradient>
  );
};
