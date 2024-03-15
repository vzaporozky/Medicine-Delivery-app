const Router = require("express");
const router = new Router();
const medicineControllers = require("../controllers/medicineControllers");

router.get("/", medicineControllers.getAll);
router.post("/create", medicineControllers.create);
router.get("/:shopId", medicineControllers.getAll);

module.exports = router;
