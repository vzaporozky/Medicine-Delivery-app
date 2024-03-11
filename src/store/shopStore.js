import { makeAutoObservable } from "mobx";

class ShopStore {
   shops = [
      {
         id: 0,
         name: "Здоровье+ Аптека",
         address: "ул. Васильковская, 10",

         medicines: [
            { name: "Аспирин", price: 50, isFavorite: false },
            { name: "Парацетамол", price: 70, isFavorite: false },
            { name: "Ибупрофен", price: 80, isFavorite: false },
            { name: "Амоксициллин", price: 120, isFavorite: false },
            { name: "Лоратадин", price: 100, isFavorite: false },
            { name: "Нурофен", price: 90, isFavorite: false },
            { name: "Фенистил", price: 110, isFavorite: false },
            { name: "Антигриппин", price: 60, isFavorite: false },
            { name: "Цитрамон", price: 65, isFavorite: false },
            { name: "Дексаметазон", price: 150, isFavorite: false },
         ],
      },
      {
         id: 1,
         name: "Фармацевтика Решений",
         address: "пр. Велика Васильковская, 25",
         medicines: [
            { name: "Валериана", price: 40, isFavorite: false },
            { name: "Аспикор", price: 55, isFavorite: false },
            { name: "Ринзасип", price: 75, isFavorite: false },
            { name: "Синупрет", price: 85, isFavorite: false },
            { name: "Дексалгин", price: 95, isFavorite: false },
            { name: "Мезим", price: 130, isFavorite: false },
            { name: "Каламин", price: 120, isFavorite: false },
            { name: "Ибупрофен", price: 80, isFavorite: false },
            { name: "Диклофенак", price: 85, isFavorite: false },
            { name: "Парацетамол", price: 70, isFavorite: false },
         ],
      },
      {
         id: 2,
         name: "Витаминная Оазис Аптека",
         address: "ул. Поповича, 5",
         medicines: [
            { name: "Эспумизан", price: 60, isFavorite: false },
            { name: "Панадол", price: 75, isFavorite: false },
            { name: "Кетонал", price: 90, isFavorite: false },
            { name: "Церукал", price: 110, isFavorite: false },
            { name: "Супрастин", price: 55, isFavorite: false },
            { name: "Папаверин", price: 45, isFavorite: false },
            { name: "Эреспал", price: 100, isFavorite: false },
            { name: "Аспирин", price: 50, isFavorite: false },
            { name: "Лоперамид", price: 65, isFavorite: false },
            { name: "Фенкарол", price: 80, isFavorite: false },
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
