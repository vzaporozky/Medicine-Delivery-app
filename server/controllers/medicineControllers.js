const { Medicine } = require("../models/models");
const ApiError = require("../error/ApiError");

class medicineControllers {
   async createOne(req, res, next) {
      try {
         let { name, price, shopId, isFavorite } = req.body;

         const medicine = await Medicine.create({
            name,
            price,
            shopId,
            isFavorite,
         });
         // console.log(shopId);

         return res.json(medicine);
      } catch (e) {
         next(ApiError.badRequest(e.message));
      }
   }

   async createFew(req, res, next) {
      try {
         let { medicines } = req.body;
         // let { name, price, shopId }
         const createdMedicine = [];

         for (let item of medicines) {
            let { name, price, isFavorite, shopId } = item;
            let medicine = await Medicine.create({
               name,
               price,
               shopId,
               isFavorite,
            });
            createdMedicine.push(medicine);
         }

         res.json(createdMedicine);
      } catch (e) {
         next(ApiError.badRequest(e.message));
      }
   }

   async getOne(req, res, next) {
      try {
         const { shopId } = req.params;
         const medicine = await Medicine.findByPk(shopId);
         console.log(shopId); ///////////

         if (!medicine) {
            throw ApiError.notFound(`Магазин с ID ${shopId} не найден`);
         }

         const medicines = await Medicine.findAll({
            where: { shopId },
         });

         res.json(medicines);
      } catch (error) {
         next(error);
      }
   }

   async getAll(req, res) {
      try {
         let { shopId } = req.query;
         let medicines;

         if (!shopId) {
            medicines = await Medicine.findAndCountAll();
         }
         if (shopId) {
            medicines = await Medicine.findAndCountAll({
               where: { shopId },
            });
         }

         return res.json(medicines);
      } catch (error) {
         next(error);
      }
   }
}

module.exports = new medicineControllers();
