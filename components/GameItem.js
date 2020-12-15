import React from "react";

//Styles
import { ShopItemStyled } from "../styles";
import { ListItem } from "native-base";
import { Image } from "react-native";

const GameItem = ({ game }) => {
  console.log("localhost:8000".replace("localhost", "ipAddress"));
  return (
    <ListItem>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: game.image.replace("localhost", "192.168.8.132") }}
      />
      <ShopItemStyled>{game.name}</ShopItemStyled>
    </ListItem>
  );
};

export default GameItem;
