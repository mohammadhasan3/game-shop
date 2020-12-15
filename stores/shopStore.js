//Libraries
import { action, makeObservable, observable } from "mobx";
import instance from "./instance";

class ShopStore {
  shops = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      shops: observable,
      loading: observable,
      fetchShops: action,
    });
  }

  fetchShops = async () => {
    try {
      const response = await instance.get("/shops");
      this.shops = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ShopStore -> fetchShops -> error", error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;
