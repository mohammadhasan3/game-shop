//Libraries
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";

//Styling
import { StyleSheet, View } from "react-native";

//Components
import RootNavigator from "./components/Navigator";

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
          <RootNavigator />
        </NavigationContainer>
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
