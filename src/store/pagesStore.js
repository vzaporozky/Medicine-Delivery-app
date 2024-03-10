import { makeAutoObservable } from "mobx";

class PagesStore {
   pageName = "shop";

   constructor() {
      makeAutoObservable(this);
   }

   changePage(payload) {
      this.pageName = payload;
   }
}

export default new PagesStore();
