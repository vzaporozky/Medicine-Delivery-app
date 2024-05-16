import { makeAutoObservable } from "mobx";

class CartStore {
   cart = [];
   totalPrice = 0;

   constructor() {
      makeAutoObservable(this);
   }

   setCart(payload) {
      this.cart = payload;
   }

   addToCart(item) {
      const foundItem = this.cart.find(
         (cartItem) => cartItem.name === item.name
      );
      if (foundItem) {
         this.updateCartItemQuantity(
            item.name,
            foundItem.quantity + 1,
            item.price
         );
      } else {
         this.totalPrice += item.price;
         this.cart.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(this.cart));
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

      localStorage.setItem("cart", JSON.stringify(this.cart));
   }

   removeItem(name) {
      const id = this.cart.findIndex((item) => item.name === name);
      const price = this.cart[id].price;
      const quantity = this.cart[id].quantity;
      this.totalPrice -= quantity * price;
      this.cart.splice(id, 1);

      localStorage.setItem("cart", JSON.stringify(this.cart));
   }

   setTotalPrice(newPrice) {
      this.totalPrice = newPrice;
   }
}

export default new CartStore();
