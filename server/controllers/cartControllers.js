const { Cart } = require("../models/models");
const ApiError = require("../error/ApiError");

class CartController {
   async get(req, res) {
      const cart = await Cart.findAll();
      return res.json(cart);
   }

   async delete(req, res) {}

   async submit(req, res, next) {
      try {
         const { name } = req.query;

         if (!name) {
            throw new ApiError(400, "Name parameter is required");
         }

         const cart = await Cart.create({ name });
         return res.json(cart);
      } catch (error) {
         next(error);
      }
   }
}

module.exports = new CartController();
