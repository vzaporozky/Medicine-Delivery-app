const Router = require("express");
const router = new Router();
const userController = require("../controllers/userControllers");

router.get("/auth", userController.check);
router.post("/registration", userController.registration);
router.post("/login", userController.login);

module.exports = router;
