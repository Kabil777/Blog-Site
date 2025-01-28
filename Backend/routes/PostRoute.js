const { postController } = require("../controllers/PostController")

const PostRouter = require("express").Router()
PostRouter.route("/").get((req, res) => {
	res.send("hello from post")
})
PostRouter.route("/").post(postController.postMethod)
module.exports = { PostRouter }
