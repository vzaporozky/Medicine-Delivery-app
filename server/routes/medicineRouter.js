const Router = require("express");
const router = new Router();
const medicineControllers = require("../controllers/medicineControllers");
const checkRole = require("../middleware/checkRoleMiddleware");

router.get("/", medicineControllers.getAll);
router.get("/:shopId", medicineControllers.getOne);
router.post("/createOne", checkRole("ADMIN"), medicineControllers.createOne);
router.post("/createFew", checkRole("ADMIN"), medicineControllers.createFew);

module.exports = router;
