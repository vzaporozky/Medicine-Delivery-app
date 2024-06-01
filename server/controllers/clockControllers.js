const { Clock } = require("../models/models");
const ApiError = require("../error/ApiError");

class clockControllers {
   async createOne(req, res, next) {
      try {
         let { name, price, shopId, isFavorite } = req.body;

         const clock = await Clock.create({
            name,
            price,
            shopId,
            isFavorite,
         });

         return res.json(clock);
      } catch (e) {
         next(ApiError.badRequest(e.message));
      }
   }

   async createFew(req, res, next) {
      try {
         let { clocks } = req.body;
         const createdClock = [];

         for (let item of clocks) {
            let { name, price, isFavorite, shopId, img } = item;
            let clock = await Clock.create({
               name,
               price,
               shopId,
               isFavorite,
               img,
            });
            createdClock.push(clock);
         }

         res.json(createdClock);
      } catch (e) {
         next(ApiError.badRequest(e.message));
      }
   }

   async getOne(req, res, next) {
      try {
         const { shopId } = req.params;
         const clock = await Clock.findByPk(shopId);
         console.log(shopId);

         if (!clock) {
            throw ApiError.notFound(`Shop with ID ${shopId} not found`);
         }

         const clocks = await Clock.findAll({
            where: { shopId },
         });

         res.json(clocks);
      } catch (error) {
         next(error);
      }
   }

   async getAll(req, res) {
      try {
         let { shopId } = req.query;
         let clocks;

         if (!shopId) {
            clocks = await Clock.findAndCountAll();
         }
         if (shopId) {
            clocks = await Clock.findAndCountAll({
               where: { shopId },
            });
         }

         return res.json(clocks);
      } catch (error) {
         next(error);
      }
   }
}

module.exports = new clockControllers();
