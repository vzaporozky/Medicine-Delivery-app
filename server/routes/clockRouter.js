const Router = require("express");
const router = new Router();
const clockControllers = require("../controllers/clockControllers");
const checkRole = require("../middleware/checkRoleMiddleware");

router.get("/", clockControllers.getAll);
router.get("/:shopId", clockControllers.getOne);
router.post("/createOne", checkRole("ADMIN"), clockControllers.createOne);
router.post("/createFew", checkRole("ADMIN"), clockControllers.createFew);

module.exports = router;
