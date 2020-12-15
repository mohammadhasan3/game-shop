import React from "react";

//Styling
import { Body, ListItem, Text } from "native-base";
import { TotalPrice } from "../styles";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      </Body>
    </ListItem>
  );
};

export default CartItem;
