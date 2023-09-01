import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/categoriesScreen";
import MealsOverviewScreen from "./screens/mealsOverviewScreen";
import FavoritesScreen from "./screens/favouritesScreen";
import MealDetailScreen from "./screens/mealDetailScreen";
import store, { stores } from "./store/redux/store";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "brown" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "chocolate" },
        drawerContentStyle: { backgroundColor: "#58111A" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => {
            return <AntDesign name="table" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="favourites"
        component={FavoritesScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => {
            return <AntDesign name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  // console.log(stores);
  return (
    <>
      <StatusBar style="light" />
      <Provider store={stores}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "brown" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "chocolate" },
            }}
          >
            <Stack.Screen
              name="Meal Categories"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
              options={{
                title: "Meals overview",
              }}
            />
            <Stack.Screen
              name="meal Details"
              component={MealDetailScreen}
              options={{
                title: "About the meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
