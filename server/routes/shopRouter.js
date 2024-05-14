const Router = require("express");
const router = new Router();
const ShopController = require("../controllers/shopControllers");
const checkRole = require("../middleware/checkRoleMiddleware");

router.get("/", ShopController.get);
router.post("/favorite", ShopController.setFavorite);
router.post("/create", checkRole("ADMIN"), ShopController.create);

module.exports = router;
