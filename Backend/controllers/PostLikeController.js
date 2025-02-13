const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const PostLikeController = {
	getMethod: async (req, res) => {
		try {
			console.log("user", req.user)
			const { slug } = req.params;
			const userId = req.user?.userId;
			const post = await prisma.post.findUnique({ where: { slug } });

			if (!post) {
				return res.status(404).json({ error: "Post not found" });
			}

			const existingLike = await prisma.like.findFirst({
				where: { postId: post.id, userId },
			});

			let updatedLikes;
			let likedByUser;

			if (existingLike) {
				await prisma.like.delete({ where: { id: existingLike.id } });
				updatedLikes = post.likes - 1;
				likedByUser = false;
			} else {
				await prisma.like.create({ data: { postId: post.id, userId } });
				updatedLikes = post.likes + 1;
				likedByUser = true;
			}

			const updatedPost = await prisma.post.update({
				where: { slug },
				data: { likes: updatedLikes },
			});

			return res.json({ likes: updatedPost.likes, likedByUser });
		} catch (error) {
			console.error(error);
			 if (!res.headersSent) {
            return res.status(500).json({ error: error.message });
        }
		}
	},
};

module.exports = { PostLikeController };
