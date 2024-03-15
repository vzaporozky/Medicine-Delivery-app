const Router = require("express");
const router = new Router();
const CartController = require("../controllers/cartControllers");

router.get("/", CartController.get);
router.delete("/delete", CartController.delete);
router.post("/submit", CartController.submit);

module.exports = router;
