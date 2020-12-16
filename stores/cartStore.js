//Libraries
import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

//Stores
import gameStore from "./gameStore";

class CartStore {
  items = [
    // {
    //   gameId: 4,
    //   quantity: 5,
    // },
    // {
    //   gameId: 5,
    //   quantity: 3,
    // },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToStore = async (newItem) => {
    const foundItem = this.items.find((item) => item.gameId === newItem.gameId);
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }

  get totalPrice() {
    let total = 0;
    this.items
      .map((item) => ({
        ...gameStore.getGameById(item.gameId),
        quantity: item.quantity,
      }))
      .forEach((item) => (total += item.quantity * item.price));
    return total;
  }
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
