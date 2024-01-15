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

export type MainTabsParams = {
  Home: undefined;
  Profile: undefined;
  Planner: undefined;
  Education: undefined;
};

const MainTab = createBottomTabNavigator<MainTabsParams>();

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
});

export const MainTabNavigator = () => {
  return (
    <MainTab.Navigator initialRouteName="Home" screenOptions={TabScreenOptions}>
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
      <MainTab.Screen name="Planner" component={MealPlannerScreen} />
      <MainTab.Screen name="Education" component={EducationScreen} />
    </MainTab.Navigator>
  );
};
