//Libraries
import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

//Styling
import { Button, Left, Right } from "native-base";
import { CartButtonStyled, CartTextStyled } from "../../styles";

//Stores
import cartStore from "../../stores/cartStore";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button transparent light>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>

      <CartButtonStyled
        type="AntDesign"
        name="shoppingcart"
        onPress={() => navigation.navigate("Cart")}
      />
      <CartTextStyled>{cartStore.totalPrice} KD</CartTextStyled>
    </Button>
  );
};

export default observer(CartButton);
