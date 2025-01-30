const {
	PostRequestController,
} = require("../controllers/PostRequestController");

const fetchPostRouter = require("express").Router();

fetchPostRouter.route("/@:slugId").get(PostRequestController.getMethod);

module.exports = { fetchPostRouter };
