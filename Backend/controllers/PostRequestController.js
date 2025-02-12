const { PrismaClient } = require("@prisma/client");
const { postReader } = require("../utils/PostReader");
const prisma = new PrismaClient();

const PostRequestController = {
	getMethod: async (req, res) => {
		try {
			const { user, slugId } = req.params;
			const data = await prisma.post.findUnique({
				where: {
					slug: slugId
				},
				select: {
					id: true,
					name: true,
					createdAt: true,
					slug: false,
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
									domain: true
								}
							}
						},
					}
				},

			});
			if (!data) {
				return res.status(404).json({ message: 'Post not found' });
			}
			console.log(data)
			const userData = await prisma.user.findUnique({
				where: {
					id: data.userId
				},
				select: {
					id: true,
					Google_id: false,
					createdAt: false,
					name: true,
					email: true,
					profileCover: true,
				}
			})
			const fileContent = await postReader(data.id)
			res.json({ userDetails: userData, postDetails: data, postContent: fileContent });
		} catch (error) {
			res.status(400).send(error.message);
		}
	},
};

module.exports = { PostRequestController };

