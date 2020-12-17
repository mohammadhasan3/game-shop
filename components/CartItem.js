import React, { useState } from "react";
import { observer } from "mobx-react";
import NumericInput from "react-native-numeric-input";

//Styling
import { Body, ListItem, Text, Right, Button } from "native-base";
import { TotalPrice, TrashIcon } from "../styles";

//Stores
import cartStore from "../stores/cartStore";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleUpdate = () => {
    const newItem = { quantity, gameId: item.gameId };
    console.log("handleUpdate-> newItem", newItem);
    cartStore.removeItemFromCart(newItem);
  };
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      </Body>
      <Right>
        <Right>
          <TrashIcon
            name="trash"
            type="Ionicons"
            onPress={() => cartStore.removeItemFromCart(item.id)}
          />
        </Right>
        {/* <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={quantity}
          minValue={0}
        />
        <Button onPress={handleUpdate} style={{ height: 20, width: 40 }}>
          <Text>Update</Text>
        </Button> */}
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
