const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


dotenv.config();

const generateToken = async (user) => {
	if (!user) {
		throw new Error("User object is required for generating token.");
	}
	try {
		const userRecord = await prisma.user.findUnique({
			where: {
				Google_id: user.Google_id,
			}
		})
		if (!userRecord) {
			throw new Error("User not found in the database.");
		}
		user = { ...user, userId: userRecord.id };
		console.log("user", user)
		const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_KEY, {
			expiresIn: "10m",
		});
		const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_KEY, {
			expiresIn: "2d",
		});
		return { accessToken, refreshToken };
	}
	catch (error) {
		return error.message
	}
};

const verifyRefreshToken = (refreshToken) => {
	try {
		let decodedToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY);
		console.log("decoded refresh:", decodedToken);
		if (decodedToken) {
			const Token = jwt.sign(decodedToken, process.env.ACCESS_TOKEN_KEY);
			console.log(Token);
			return Token;
		}
	} catch (error) {
		throw new Error("Invalid refresh token.");
	}
};

const AuthenticateToken = (req, res, next) => {
	let accessToken = req.cookies.accessToken;
	if (!accessToken) return res.sendStatus(401);
	jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY, (error, decoded) => {
		if (error) {
			try {
				const accessToken = verifyRefreshToken(req.cookies.sessionRefreshToken);
				console.log("returned", accessToken);
				res.cookie("accessToken", accessToken, {
					httpOnly: true,
				});
				req.user = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);
				console.log(req.user || "No user found");
				next();
			} catch (error) {
				return res.status(401).json({ message: `${error}` });
			}
		}
		req.user = decoded
		next();
	});
};
module.exports = { generateToken, AuthenticateToken };
