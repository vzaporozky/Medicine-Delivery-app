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
         let { name, address, medicines } = req.body;

         const device = await Shop.create({
            name,
            address,
            // medicines,
         });

         // if (medicines) {
         //    medicines = JSON.parse(medicines);
         //    medicines.forEach((i) =>
         //       DeviceInfo.create({
         //          name: i.name,
         //          description: i.description,
         //          price: i.price,
         //       })
         //    );
         // }

         return res.json(device);
      } catch (e) {
         next(ApiError.badRequest(e.message));
      }
   }
}

module.exports = new ShopControllers();
