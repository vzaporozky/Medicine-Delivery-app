import { makeAutoObservable } from "mobx";

class UserStore {
   pageName = "shop";

   constructor() {
      makeAutoObservable(this);
   }

   changePage(payload) {
      this.pageName = payload;
   }
}

export default UserStore;
