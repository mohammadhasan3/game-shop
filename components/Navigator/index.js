import React from "react";

//Components
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDescription from "../ShopDescription";
import GameList from "../GameList";
import CartList from "../CartList";
import CartButton from "../buttons/CartButton";

//Styles
import { Left, Right } from "native-base";

import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
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
        options={{ title: "Choose a Shop", headerRight: () => <CartButton /> }}
      />
      <Screen name="Games" component={GameList} />
      <Screen
        name="ShopDescription"
        component={ShopDescription}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerTitleStyle: {
              fontSize: 16,
            },
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen name="Cart" component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;
