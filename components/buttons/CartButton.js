import React from "react";
import { useNavigation } from "@react-navigation/native";

//Styling
import { CartButtonStyled } from "../../styles";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <CartButtonStyled
      type="AntDesign"
      name="shoppingcart"
      onPress={() => navigation.navigate("Cart")}
    />
  );
};

export default CartButton;
