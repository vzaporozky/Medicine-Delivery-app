import { makeAutoObservable } from "mobx";

class ShopStore {
   shops = [
      {
         id: 0,
         name: "Здоровье+ Аптека",
         address: "ул. Васильковская, 10",
         medicines: [
            { name: "Aspirin", price: 50, isFavorite: false },
            { name: "Paracetamol", price: 70, isFavorite: false },
            { name: "Ibuprofen", price: 80, isFavorite: false },
            { name: "Amoxicillin", price: 120, isFavorite: false },
            { name: "Loratadine", price: 100, isFavorite: false },
            { name: "Nurofen", price: 90, isFavorite: false },
            { name: "Fenistil", price: 110, isFavorite: false },
            { name: "Antigrippin", price: 60, isFavorite: false },
            { name: "Citramon", price: 65, isFavorite: false },
            { name: "Dexamethasone", price: 150, isFavorite: false },
         ],
      },
      {
         id: 1,
         name: "Фармацевтика Решений",
         address: "пр. Велика Васильковская, 25",
         medicines: [
            { name: "Valerian", price: 40, isFavorite: false },
            { name: "Aspicor", price: 55, isFavorite: false },
            { name: "Rinzasip", price: 75, isFavorite: false },
            { name: "Sinupret", price: 85, isFavorite: false },
            { name: "Dexalgin", price: 95, isFavorite: false },
            { name: "Mezim", price: 130, isFavorite: false },
            { name: "Kalamine", price: 120, isFavorite: false },
            { name: "Ibuprofen", price: 80, isFavorite: false },
            { name: "Diclofenac", price: 85, isFavorite: false },
            { name: "Paracetamol", price: 70, isFavorite: false },
         ],
      },
      {
         id: 2,
         name: "Витаминная Оазис Аптека",
         address: "ул. Поповича, 5",
         medicines: [
            { name: "Espumisan", price: 60, isFavorite: false },
            { name: "Panadol", price: 75, isFavorite: false },
            { name: "Ketonal", price: 90, isFavorite: false },
            { name: "Cerenia", price: 110, isFavorite: false },
            { name: "Suprastin", price: 55, isFavorite: false },
            { name: "Papaverine", price: 45, isFavorite: false },
            { name: "Erespal", price: 100, isFavorite: false },
            { name: "Aspirin", price: 50, isFavorite: false },
            { name: "Loperamide", price: 65, isFavorite: false },
            { name: "Fencarol", price: 80, isFavorite: false },
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

export default new ShopStore();
