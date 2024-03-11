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
      this.totalPrice += item.price;
      this.cart.push(item);
   }

   updateCartItemQuantity(name, quantity, price) {
      const item = this.cart.find((item) => item.name === name);

      quantity > item.quantity
         ? (this.totalPrice += price)
         : (this.totalPrice -= price);

      if (item) item.quantity = quantity;
      if (quantity <= 0) {
         const id = this.cart.findIndex((item) => item.name === name);
         this.cart.splice(id, 1);
      }
   }

   removeItem(name) {
      const id = this.cart.findIndex((item) => item.name === name);
      const price = this.cart[id].price;
      const quantity = this.cart[id].quantity;
      this.totalPrice -= quantity * price;
      this.cart.splice(id, 1);
   }

   setTotalPrice(newPrice) {
      this.totalPrice = newPrice;
   }
}

export default new cartStore();
