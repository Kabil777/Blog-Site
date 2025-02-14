const express = require("express");
const { authRouterGoogle } = require("./googleAuthRoute");
const { userRouter } = require("./userRoute");
const { PostRouter } = require("./PostRoute");
const { fetchPostRouter } = require("./fetchPostRoute");
const { AuthenticateToken } = require("../middlewares/jwtMiddleware");
const router = express.Router();

router.route("/").get((req, res) => {
	res.send("hello from /");
});
router.use("/user", AuthenticateToken, userRouter);
router.use("/post", AuthenticateToken, PostRouter);
router.use("/auth/google", authRouterGoogle);
router.use("/fetchPost",AuthenticateToken, fetchPostRouter);
module.exports = { router };
