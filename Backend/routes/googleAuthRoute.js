const express = require("express");
const passport = require("passport");
const { generateToken } = require("../middlewares/jwtMiddleware");

const authRouterGoogle = express.Router();

authRouterGoogle.route("/").get(
	passport.authenticate("google", {
		scope: ["profile", "email"],
	}),
);

authRouterGoogle.route("/callback").get(
	passport.authenticate("google", {
		session: false,
	}),
	async (req, res) => {
		const user = req.user;
		if (!user) res.sendStatus(404);
		const { accessToken, refreshToken } = await generateToken(user);
		res.cookie("sessionRefreshToken", refreshToken, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 100 * 2,
		});
		res.cookie("accessToken", accessToken, {
			httpOnly: true,
			maxAge: 60 * 60 * 1000,
			sameSite: "strict",
		});
		res.redirect("http://localhost:5173/");
	},
);
module.exports = { authRouterGoogle };
