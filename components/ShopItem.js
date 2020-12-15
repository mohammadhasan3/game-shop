import React from "react";

//Styling
import { Text, Image } from "react-native";
import { ListItem } from "native-base";
import { ShopItemStyled } from "../styles";

//Components
import ShopDescription from "./ShopDescription";

const ShopItem = ({ shop, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("ShopDescription", { shop: shop })}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: shop.image.replace("localhost", "192.168.8.132"),
        }}
      />
      <ShopItemStyled>{shop.name}</ShopItemStyled>
    </ListItem>
  );
};

export default ShopItem;
