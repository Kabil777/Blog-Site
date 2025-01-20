const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();

app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
	console.log(`App listening on port ${process.env.PORT} `);
});
