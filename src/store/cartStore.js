import { makeAutoObservable } from "mobx";

class cartStore {
   cart = [];

   constructor() {
      makeAutoObservable(this);
   }

   addToCart(payload) {
      this.cart.push(payload);
   }
}

export default new cartStore();
