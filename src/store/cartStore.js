import { makeAutoObservable } from "mobx";

class cartStore {
   cart = [];

   constructor() {
      makeAutoObservable(this);
   }

   setCart(payload) {
      this.cart = payload;
   }

   addToCart(item) {
      this.cart.push(item);
   }

   updateCartItemQuantity(name, quantity) {
      const item = this.cart.find((item) => item.name === name);
      if (item) {
         item.count = quantity;
      }
   }
}

export default new cartStore();
