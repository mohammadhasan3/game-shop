//Libraries
import { makeAutoObservable } from "mobx";

class CartStore {
  items = [
    {
      gameId: 4,
      quantity: 5,
    },
    {
      gameId: 5,
      quantity: 3,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const cartStore = new CartStore();
export default cartStore;
