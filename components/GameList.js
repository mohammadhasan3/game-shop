//Libraries
import React from "react";

//Components
import GameItem from "./GameItem";

//Styles
import { List, Content } from "native-base";

const GameList = ({ games }) => {
  const gameList = games.map((game) => <GameItem game={game} key={game.id} />);
  return (
    <Content>
      <List>{gameList}</List>
    </Content>
  );
};

export default GameList;
