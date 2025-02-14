const { PrismaClient } = require("@prisma/client");
const { postReader } = require("../utils/PostReader");
const prisma = new PrismaClient();

const PostRequestController = {
	getMethod: async (req, res) => {
		try {
			const { user, slugId } = req.params;
			console.log(slugId);
			const data = await prisma.post.findUnique({
				where: {
					slug: slugId,
				},
				select: {
					id: true,
					name: true,
					createdAt: true,
					slug: true,
					description: false,
					mdFileName: false,
					userId: true,
					tags: {
						select: {
							postId: false,
							id: false,
							tag: {
								select: {
									createdAt: false,
									id: true,
									skill: true,
									domain: true,
								},
							},
						},
					},
					like: {
						select: {
							userId: true,
						},
					},
					_count: {
						select: {
							like: true,
						},
					},
				},
			});

			const modifiedData = data.like.map((likes) => ({
				isLiked: likes.userId === data.userId,
			}));
			console.table(modifiedData);
			if (!data) {
				return res.status(404).json({ message: "Post not found" });
			}
			console.log(data);
			const userData = await prisma.user.findUnique({
				where: {
					id: data.userId,
				},
				select: {
					id: true,
					Google_id: false,
					createdAt: false,
					name: true,
					email: true,
					profileCover: true,
				},
			});
			const fileContent = await postReader(data.id);
			return res.json({
				userDetails: userData,
				postDetails: data,
				postContent: fileContent,
			});
		} catch (error) {
			console.log(error.message);
			return res.send(error.message);
		}
	},
};

module.exports = { PostRequestController };
