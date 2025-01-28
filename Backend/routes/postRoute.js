const PostRouter = require("express").Router();
const { postSaveMethod } = require("../controllers/postCreate");
const { upload } = require("../controllers/postCreate");

PostRouter.post("/", upload.single("file"), postSaveMethod);

module.exports = { PostRouter };
