import { makeAutoObservable } from "mobx";

class ShopStore {
   shops = [
      {
         id: 0,
         name: "Здоровье+ Аптека",
         address: "ул. Васильковская, 10",

         medicines: [
            { name: "Аспирин", price: 50 },
            { name: "Парацетамол", price: 70 },
            { name: "Ибупрофен", price: 80 },
            { name: "Амоксициллин", price: 120 },
            { name: "Лоратадин", price: 100 },
            { name: "Нурофен", price: 90 },
            { name: "Фенистил", price: 110 },
            { name: "Антигриппин", price: 60 },
            { name: "Цитрамон", price: 65 },
            { name: "Дексаметазон", price: 150 },
         ],
      },
      {
         id: 1,
         name: "Фармацевтика Решений",
         address: "пр. Велика Васильковская, 25",
         medicines: [
            { name: "Валериана", price: 40 },
            { name: "Аспикор", price: 55 },
            { name: "Ринзасип", price: 75 },
            { name: "Синупрет", price: 85 },
            { name: "Дексалгин", price: 95 },
            { name: "Мезим", price: 130 },
            { name: "Каламин", price: 120 },
            { name: "Ибупрофен", price: 80 },
            { name: "Диклофенак", price: 85 },
            { name: "Парацетамол", price: 70 },
         ],
      },
      {
         id: 2,
         name: "Витаминная Оазис Аптека",
         address: "ул. Поповича, 5",
         medicines: [
            { name: "Эспумизан", price: 60 },
            { name: "Панадол", price: 75 },
            { name: "Кетонал", price: 90 },
            { name: "Церукал", price: 110 },
            { name: "Супрастин", price: 55 },
            { name: "Папаверин", price: 45 },
            { name: "Эреспал", price: 100 },
            { name: "Аспирин", price: 50 },
            { name: "Лоперамид", price: 65 },
            { name: "Фенкарол", price: 80 },
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
}

export default new ShopStore();
