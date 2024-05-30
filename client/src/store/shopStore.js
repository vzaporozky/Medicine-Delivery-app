import { makeAutoObservable } from "mobx";

class ShopStore {
   constructor() {
      this.shopsFetched = [];
      this.medicinesFetched = {};
      this.currentShop = 1;
      makeAutoObservable(this);
   }

   setShopsFetched(shopsFetched) {
      this.shopsFetched = shopsFetched;
   }
   setMedicinesFetched(medicines) {
      this.medicinesFetched = medicines;
   }

   changeShop(payload) {
      this.currentShop = payload;
   }

   toggleFavorite = (el, medicine) => {
      medicine.isFavorite = !medicine.isFavorite;
      const medicines = this.medicinesFetched.rows;

      if (medicine.isFavorite) {
         const index = medicines.findIndex((item) => item == medicine);

         if (index != -1) {
            const item = medicines.splice(index, 1)[0];
            medicines.unshift(item);
         }
      } else {
         const index = medicines.findIndex((item) => item == medicine);

         if (index != -1) {
            const item = medicines.splice(index, 1)[0];
            medicines.push(item);
         }
      }
   };

   handleMouseEnter = (el, medicine) => {
      if (
         el.target &&
         el.target.childNodes[0] &&
         el.target.childNodes[0].childNodes[0]
      ) {
         const svg = el.target.childNodes[0].childNodes[0];

         if (medicine.isFavorite == true) svg.style.fill = "white";
         else svg.style.fill = "black";
      }
   };
   handleMouseLeave = (el, medicine) => {
      if (
         el.target &&
         el.target.childNodes[0] &&
         el.target.childNodes[0].childNodes[0]
      ) {
         const svg = el.target.childNodes[0].childNodes[0];

         if (medicine.isFavorite == true) svg.style.fill = "red";
         else svg.style.fill = "black";
      }
   };
}

export default new ShopStore();
