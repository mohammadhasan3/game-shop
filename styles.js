import styled from "styled-components/native";

import { Icon, Text } from "native-base";
import { TextInput } from "react-native";

//*********************Image Styling *********************
export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ShopDetailImage = styled.Image`
  width: 150;
  height: 150;
`;

//***************************************************/

//********************View Styling*****************
export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ShopDetailWrapper = styled.View`
  margin-top: 50;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-right: 60px;
  padding-left: 60px;
`;

//************************************************** */

//******************Text Styling***********************/
export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #fff;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38;
  text-align: center;
`;

export const ShopItemStyled = styled.Text`
  color: ${(props) => props.theme.mainColour};
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

export const ShopDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40;
`;

export const TotalPrice = styled.Text`
  color: ${(props) => props.theme.red};
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CartTextStyled = styled.Text`
  color: ${(props) => props.theme.backgroundColour};
  font-size: 12px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthTitle = styled.Text`
  color: ${(props) => props.theme.red};
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: ${(props) => props.theme.red};
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.red};
  border-bottom-color: ${(props) => props.theme.red};
  border-bottom-width: 1px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: ${(props) => props.theme.red};
  margin-top: 15px;
  align-items: center;
  text-align: center;
`;
//***************************************************** */

// ****************** Icon/Button Styling ***************** */

export const CartButtonStyled = styled(Icon)`
  color: white;
  margin-right: 10px;
`;

export const TrashIcon = styled(Icon)`
  color: ${(props) => props.theme.red};
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.red};
  margin-top: 30px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.red};
  margin-top: 30px;
`;

//********************************************************* */
