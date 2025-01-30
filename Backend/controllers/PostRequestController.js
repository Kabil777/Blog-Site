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
					tags: true
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
			const tags = await prisma.tags.findUnique({
				where: {
					id: data.tags[0].tagId,
				},
				select: {
					skill: true,
					domain: false,
					id: true,
					createdAt: false
				}
			});
			const fileContent = await postReader(data.id)
			res.json({ userDetails: userData, postDetails: data, tags: tags, postContent: fileContent });
		} catch (error) {
			res.status(400).send(error.message);
		}
	},
};

module.exports = { PostRequestController };
