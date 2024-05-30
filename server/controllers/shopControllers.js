const { Shop } = require("../models/models");
const ApiError = require("../error/ApiError");

class ShopControllers {
   async get(req, res) {
      const shop = await Shop.findAll();
      return res.json(shop);
   }

   async setFavorite(req, res) {}

   async create(req, res, next) {
      try {
         let { name, address } = req.body;

         const device = await Shop.create({
            name,
            address,
         });

         return res.json(device);
      } catch (e) {
         next(ApiError.badRequest(e.message));
      }
   }
}

module.exports = new ShopControllers();
