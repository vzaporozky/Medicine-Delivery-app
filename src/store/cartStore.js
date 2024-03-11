import { makeAutoObservable } from "mobx";

class cartStore {
   cart = [];
   totalPrice = 0;

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

      if (item) item.count = quantity;
      if (quantity <= 0) {
         const id = this.cart.findIndex((item) => item.name === name);
         this.cart.splice(id, 1);
      }
   }

   removeItem(name) {
      const id = this.cart.findIndex((item) => item.name === name);
      this.cart.splice(id, 1);
   }

   setTotalPrice(newPrice) {
      this.totalPrice = newPrice;
   }
}

export default new cartStore();
