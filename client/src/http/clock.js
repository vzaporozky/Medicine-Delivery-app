import { $authHost, $host } from "./index";
// import jwt_decode from "jwt-decode";

export const createShop = async (brand) => {
   const { data } = await $authHost.post("api/shop", brand);
   return data;
};

export const fetchShops = async () => {
   const { data } = await $host.get("api/shop");
   return data;
};

export const createMedicine = async (device) => {
   const { data } = await $authHost.post("api/medicine", device);
   return data;
};

export const fetchMedicines = async (typeId, brandId, page, limit = 5) => {
   const { data } = await $host.get("api/medicine", {
      params: {
         shopId,
         // page,
         // limit,
      },
   });
   return data;
};
