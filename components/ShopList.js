//Libraries
import React from "react";
import { observer } from "mobx-react";

//Styling

import { List, Content, Spinner } from "native-base";

//Stores
import shopStore from "../stores/shopStore";

//Components
import ShopItem from "./ShopItem";

const ShopList = ({ navigation }) => {
  if (shopStore.loading) return <Spinner />;

  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} navigation={navigation} />
  ));
  return (
    <Content>
      <List>{shopList}</List>
    </Content>
  );
};

export default observer(ShopList);
