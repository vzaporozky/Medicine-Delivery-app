import { makeAutoObservable } from "mobx";

class ShopStore {
   shops = [
      {
         id: 0,
         name: "Здоровье+ Аптека",
         address: "ул. Васильковская, 10",
         medicines: [
            { name: "Aspirin", price: 50, shopId: 1 },
            { name: "Paracetamol", price: 70, shopId: 1 },
            { name: "Ibuprofen", price: 80, shopId: 1 },
            { name: "Amoxicillin", price: 120, shopId: 1 },
            { name: "Loratadine", price: 100, shopId: 1 },
            { name: "Nurofen", price: 90, shopId: 1 },
            { name: "Fenistil", price: 110, shopId: 1 },
            { name: "Antigrippin", price: 60, shopId: 1 },
            { name: "Citramon", price: 65, shopId: 1 },
            { name: "Dexamethasone", price: 150, shopId: 1 },
         ],
      },
      {
         id: 1,
         name: "Фармацевтика Решений",
         address: "пр. Велика Васильковская, 25",
         medicines: [
            { name: "Valerian", price: 40, shopId: 2 },
            { name: "Aspicor", price: 55, shopId: 2 },
            { name: "Rinzasip", price: 75, shopId: 2 },
            { name: "Sinupret", price: 85, shopId: 2 },
            { name: "Dexalgin", price: 95, shopId: 2 },
            { name: "Mezim", price: 130, shopId: 2 },
            { name: "Kalamine", price: 120, shopId: 2 },
            { name: "Ibuprofen", price: 80, shopId: 2 },
            { name: "Diclofenac", price: 85, shopId: 2 },
            { name: "Paracetamol", price: 70, shopId: 2 },
         ],
      },
      {
         id: 2,
         name: "Витаминная Оазис Аптека",
         address: "ул. Поповича, 5",
         medicines: [
            { name: "Espumisan", price: 60, shopId: 3 },
            { name: "Panadol", price: 75, shopId: 3 },
            { name: "Ketonal", price: 90, shopId: 3 },
            { name: "Cerenia", price: 110, shopId: 3 },
            { name: "Suprastin", price: 55, shopId: 3 },
            { name: "Papaverine", price: 45, shopId: 3 },
            { name: "Erespal", price: 100, shopId: 3 },
            { name: "Aspirin", price: 50, shopId: 3 },
            { name: "Loperamide", price: 65, shopId: 3 },
            { name: "Fencarol", price: 80, shopId: 3 },
         ],
      },
   ];

   currentShop = 0;

   constructor() {
      makeAutoObservable(this);
   }

   changeShop(payload) {
      this.currentShop = payload;
   }

   toggleFavorite = (el, medicine) => {
      medicine.isFavorite = !medicine.isFavorite;

      if (medicine.isFavorite) {
         const shop = this.shops[this.currentShop];
         const index = shop.medicines.findIndex((item) => item == medicine);

         if (index != -1) {
            const item = shop.medicines.splice(index, 1)[0];
            shop.medicines.unshift(item);
         }
      } else {
         const shop = this.shops[this.currentShop];
         const index = shop.medicines.findIndex((item) => item == medicine);

         if (index != -1) {
            const item = shop.medicines.splice(index, 1)[0];
            shop.medicines.push(item);
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

export default ShopStore;
