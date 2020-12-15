import styled from "styled-components/native";

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

//************************************************** */

//Text Styling
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

//***************************************************** */
