const { postController } = require("../controllers/PostController");

const PostRouter = require("express").Router();
PostRouter.route("/").post(postController.postMethod);
PostRouter.route("/").get(postController.getMethod);
module.exports = { PostRouter };
