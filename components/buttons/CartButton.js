//Libraries
import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

//Styling
import { Alert } from "react-native";
import { Button, Left, Right } from "native-base";
import { CartButtonStyled, CartTextStyled } from "../../styles";

//Stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CartButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) navigation.navigate("Cart");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Button transparent light>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>

      <CartButtonStyled
        type="AntDesign"
        name="shoppingcart"
        onPress={handlePress}
      />
      <CartTextStyled>{cartStore.totalPrice} KD</CartTextStyled>
    </Button>
  );
};

export default observer(CartButton);
