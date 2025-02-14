const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const PostLikeController = {
	getMethod: async (req, res) => {
		try {
			console.log("user", req.user);
			const { slug } = req.params;
			const userId = req.user?.id;

			if (!userId) {
				return res.status(401).json({ error: "Unauthorized" });
			}

			const post = await prisma.post.findUnique({ where: { slug } });

			if (!post) {
				return res.status(404).json({ error: "Post not found" });
			}

			if (post.likes === null) {
				await prisma.post.update({
					where: { id: post.id },
					data: { likes: 0 },
				});
				post.likes = 0;
			}

			const existingLike = await prisma.like.findFirst({
				where: { postId: post.id, userId },
			});

			let likedByUser;
			if (existingLike) {
				await prisma.like.delete({ where: { id: existingLike.id } });
				await prisma.post.update({
					where: { id: post.id },
					data: { likes: { decrement: 1 } },
				});
				likedByUser = false;
			} else {
				await prisma.like.create({ data: { postId: post.id, userId } });
				await prisma.post.update({
					where: { id: post.id },
					data: { likes: { increment: 1 } },
				});
				likedByUser = true;
			}

			const updatedPost = await prisma.post.findUnique({
				where: { id: post.id },
				select: { likes: true },
			});

			return res.json({ likes: updatedPost.likes, likedByUser });
		} catch (error) {
			console.error("Error in PostLikeController:", error);
			if (!res.headersSent) {
				return res.status(500).json({ error: error.message });
			}
		}
	},
};

module.exports = { PostLikeController };
