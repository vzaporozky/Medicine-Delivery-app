const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const shopRouter = require("./shopRouter");
const cartRouter = require("./cartRouter");
const clockRouter = require("./clockRouter");

router.use("/user", userRouter);
router.use("/shop", shopRouter);
router.use("/cart", cartRouter);
router.use("/clock", clockRouter);
// router.use('/user')

module.exports = router;
