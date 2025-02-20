const { postController } = require("../controllers/PostController");
const { PostLikeController } = require("../controllers/PostLikeController");

const PostRouter = require("express").Router();
PostRouter.route("/").post(postController.postMethod);
PostRouter.route("/").get(postController.getMethod);
PostRouter.route("/like/:slug").get(PostLikeController.getMethod);
module.exports = { PostRouter };
