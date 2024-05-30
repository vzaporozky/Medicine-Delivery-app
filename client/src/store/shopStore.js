import { makeAutoObservable } from "mobx";

class ShopStore {
   constructor() {
      this.shopsFetched = [];
      this.clocksFetched = {};
      this.currentShop = 1;
      makeAutoObservable(this);
   }

   setShopsFetched(shopsFetched) {
      this.shopsFetched = shopsFetched;
   }
   setClocksFetched(clocks) {
      this.clocksFetched = clocks;
   }

   changeShop(payload) {
      this.currentShop = payload;
   }

   toggleFavorite = (el, clock) => {
      clock.isFavorite = !clock.isFavorite;
      const clocks = this.clocksFetched.rows;

      if (clock.isFavorite) {
         const index = clocks.findIndex((item) => item == clock);

         if (index != -1) {
            const item = clocks.splice(index, 1)[0];
            clocks.unshift(item);
         }
      } else {
         const index = clocks.findIndex((item) => item == clock);

         if (index != -1) {
            const item = clocks.splice(index, 1)[0];
            clocks.push(item);
         }
      }
   };

   handleMouseEnter = (el, clock) => {
      if (
         el.target &&
         el.target.childNodes[0] &&
         el.target.childNodes[0].childNodes[0]
      ) {
         const svg = el.target.childNodes[0].childNodes[0];

         if (clock.isFavorite == true) svg.style.fill = "white";
         else svg.style.fill = "black";
      }
   };
   handleMouseLeave = (el, clock) => {
      if (
         el.target &&
         el.target.childNodes[0] &&
         el.target.childNodes[0].childNodes[0]
      ) {
         const svg = el.target.childNodes[0].childNodes[0];

         if (clock.isFavorite == true) svg.style.fill = "red";
         else svg.style.fill = "black";
      }
   };
}

export default new ShopStore();
