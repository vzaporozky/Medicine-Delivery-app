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

export const createClock = async (device) => {
   const { data } = await $authHost.post("api/clock", device);
   return data;
};

export const fetchClocks = async (shopId) => {
   const { data } = await $host.get("api/clock", {
      params: {
         shopId,
      },
   });
   return data;
};
