const express = require("express");

const { AuthenticateToken } = require("../middlewares/jwtMiddleware");
const userRouter = express.Router();

userRouter.route("/").get((req, res) => {
	res.json(req.user);
});

module.exports = { userRouter };
