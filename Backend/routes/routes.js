const express = require("express");
const { authRouterGoogle } = require("./googleAuthRoute");
const { userRouter } = require("./userRoute");
const { PostRouter } = require("./PostRoute");
const router = express.Router();

router.route("/").get((req, res) => {
	res.send("hello from /");
});
router.use("/user", userRouter);
router.use("/post", PostRouter);
router.use("/auth/google", authRouterGoogle);
router.use("/post", PostRouter)
module.exports = { router };
