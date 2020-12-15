import React from "react";

// Styling

import {
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  BottomStyling,
  ButtonStyled,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://www.pdvg.it/wp-content/uploads/2020/05/videogames-controller-1920x1080-1.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Red Panda Gaming</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("Shops")}>
            Click here
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
