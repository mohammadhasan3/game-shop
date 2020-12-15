//Libraries
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Styling
import { StyleSheet, Text, View } from "react-native";

//Components
import Home from "./components/Home";
import ShopList from "./components/ShopList";
import ShopDescription from "./components/ShopDescription";
import GameList from "./components/GameList";

const theme = {
  light: {
    mainColour: "#000033",
    backgroundColour: "#00B2EE",
    priceColour: "#000033",
    red: "#ff3232",
  },

  dark: {
    mainColour: "#f0ead6",
    backgroundColour: "black",
    priceColour: "#f0ead6",
    red: "#ff3232",
  },
};

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  // const themeText = ["Light Mode", "Dark Mode"];

  // const [themeMode, setThemeMode] = useState("light");
  // const toggleTheme = () => {
  //   if (themeMode === "light") {
  //     setThemeMode("dark");
  //   } else {
  //     setThemeMode("light");
  //   }
  // };

  // let idx = 2;
  // if (themeMode === "light") {
  //   idx = 1;
  // } else {
  //   idx = 0;
  // }

  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme.light}>
        <NavigationContainer>
          <Navigator
            initialRouteName="Home"
            screenOptions={{
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: "#90d4ed",
              },
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Screen
              name="Shops"
              component={ShopList}
              options={{ title: "Choose a Shop" }}
            />
            <Screen name="Games" component={GameList} />
            <Screen name="ShopDescription" component={ShopDescription} />
          </Navigator>
        </NavigationContainer>
        {/* <ShopList /> */}
        {/* <ShopDescription /> */}
      </ThemeProvider>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
