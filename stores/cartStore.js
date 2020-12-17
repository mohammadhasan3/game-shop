//Libraries
import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

//Stores
import gameStore from "./gameStore";

class CartStore {
  items = [];

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

  //CHECK THIS
  removeItemFromStore = async (newItem) => {
    const foundItem = this.items.find((item) => item.gameId === newItem.gameId);
    if (foundItem) foundItem.quantity -= newItem.quantity;
    else this.items.pop(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.gameId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkout = async () => {
    this.items = [];
    alert("Checked Out Heh");
    await AsyncStorage.removeItem("myCart");
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
