const express = require("express");
const dotenv = require("dotenv");
const { router } = require("./routes/routes");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

app.use(
	cors({
		origin: "http://localhost:5173",
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	}),
);
app.use(cookieParser());
app.use(express.json());
require("./middlewares/PassportMiddleware");
app.use(passport.initialize());

app.use("/", router);
app.listen(process.env.PORT || 5000, () => {
	console.log(`App listening on port ${process.env.PORT} `);
});
