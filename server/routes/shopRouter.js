const Router = require("express");
const router = new Router();
const ShopController = require("../controllers/shopControllers");

router.get("/", ShopController.get);
router.post("/favorite", ShopController.setFavorite);
router.post("/create", ShopController.create);

module.exports = router;
