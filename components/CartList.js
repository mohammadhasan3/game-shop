import React from "react";
import { observer } from "mobx-react";

//Stores
import gameStore from "../stores/gameStore";
import cartStore from "../stores/cartStore";

//Styling
import { List, Spinner } from "native-base";

//Components
import CartItem from "./CartItem";

const CartList = () => {
  if (gameStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...gameStore.getGameById(item.gameId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);
  return <List>{cartList}</List>;
};

export default observer(CartList);
