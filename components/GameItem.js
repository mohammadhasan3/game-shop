//Libraries
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";

//Styles
import { ShopItemStyled } from "../styles";
import { ListItem, Left, Right, Button } from "native-base";
import { Image, Text } from "react-native";

//Stores
import cartStore from "../stores/cartStore";

const GameItem = ({ game }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity, gameId: game.id };
    console.log("handleAdd -> newItem", newItem);
    cartStore.addItemToStore(newItem);
  };

  return (
    <ListItem>
      <Left>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: game.image.replace("localhost", "192.168.8.132") }}
        />
        <ShopItemStyled>{game.name}</ShopItemStyled>
      </Left>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={quantity}
          minValue={0}
        />
        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default GameItem;
