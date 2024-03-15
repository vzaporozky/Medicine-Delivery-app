const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const shopRouter = require("./shopRouter");
const cartRouter = require("./cartRouter");
const medicineRouter = require("./medicineRouter");

router.use("/user", userRouter);
router.use("/shop", shopRouter);
router.use("/cart", cartRouter);
router.use("/medicine", medicineRouter);
// router.use('/user')

module.exports = router;
