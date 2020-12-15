import React from "react";

//Stores
import shopStore from "../stores/shopStore";
import gameStore from "../stores/gameStore";

//Styling
import { ShopDetailTitle, ShopDetailImage, ShopDetailWrapper } from "../styles";
import { Spinner } from "native-base";

//Components
import GameList from "./GameList";

const ShopDescription = ({ navigation, route }) => {
  const { shop } = route.params;
  if (shopStore.loading) return <Spinner />;

  const gamesFromGameStore = shop.games.map((game) =>
    gameStore.getGameById(game.id)
  );
  return (
    <>
      <ShopDetailWrapper>
        <ShopDetailImage
          source={{
            uri:
              "https://www.wpri.com/wp-content/uploads/sites/23/2020/08/Red-Panda-cutie.jpg?w=640",
          }}
        />
        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
      </ShopDetailWrapper>
      <GameList games={gamesFromGameStore} />
    </>
  );
};

export default ShopDescription;
