//Libraries
import { action, makeObservable, observable } from "mobx";
import instance from "./instance";

class GameStore {
  games = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      games: observable,
      loading: observable,
      fetchGames: action,
    });
  }

  fetchGames = async () => {
    try {
      const response = await instance.get("/games");
      this.games = response.data;
      this.loading = false;
    } catch (error) {
      console.error("GameStore -> fetchGames -> error", error);
    }
  };

  getGameById = (gameId) => this.games.find((game) => game.id === gameId);
}

const gameStore = new GameStore();
gameStore.fetchGames();
export default gameStore;
