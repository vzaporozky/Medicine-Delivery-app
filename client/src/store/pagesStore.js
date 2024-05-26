import { makeAutoObservable } from "mobx";

class PagesStore {
   constructor() {
      this.pageName = "shop";
      this.loading = true;
      makeAutoObservable(this);
   }

   changePage(payload) {
      this.pageName = payload;
   }

   setLoading(payload) {
      this.loading = payload;
   }
}

export default new PagesStore();
