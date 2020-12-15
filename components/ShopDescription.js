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
            uri: shop.image.replace("localhost", "192.168.8.132"),
          }}
        />
        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
      </ShopDetailWrapper>
      <GameList games={gamesFromGameStore} />
    </>
  );
};

export default ShopDescription;
