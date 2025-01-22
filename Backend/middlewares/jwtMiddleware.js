const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const generateToken = async (user) => {
	if (!user) {
		throw new Error("User object is required for generating token.");
	}
	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_KEY, {
		expiresIn: "1h",
	});
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_KEY, {
		expiresIn: "2d",
	});
	return { accessToken, refreshToken };
};

const AuthenticateToken = (req, res, next) => {
	console.log(req.cookies);
	const accessToken = req.cookies.accessToken;
	if (!accessToken) return res.sendStatus(401);
	jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY, (error, decoded) => {
		if (error) return res.sendStatus(403);
		req.user = decoded;
		next();
	});
};
module.exports = { generateToken, AuthenticateToken };
