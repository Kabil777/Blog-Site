const {
	PostRequestController,
} = require("../controllers/PostRequestController");

const fetchPostRouter = require("express").Router();

fetchPostRouter.route("/@:user/:slugId").get(PostRequestController.getMethod);

module.exports = { fetchPostRouter };
