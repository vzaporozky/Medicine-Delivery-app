import { makeAutoObservable } from "mobx";

class PagesStore {
   constructor() {
      this.pageName = "shop";
      makeAutoObservable(this);
   }

   changePage(payload) {
      this.pageName = payload;
   }
}

export default new PagesStore();
