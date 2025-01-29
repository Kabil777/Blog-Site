const { fileWriter } = require("../utils/PostWriter");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const postController = {
	getMethod: (req, res) => {
		res.send("hello");
	},
	postMethod: async (req, res) => {
		console.log(req.body);
		try {
			const userToken = req.cookies.accessToken;
			console.log(userToken);
			const decoded = jwt.verify(userToken, process.env.ACCESS_TOKEN_KEY);
			const userId = decoded.id;
			const { postId, title, description, tags, blog } = req.body;
			if (!postId || !title || !blog) {
				return res
					.status(400)
					.json({ error: "Missing required fields: id, title, or blog" });
			}
			console.log(userId);
			const fileName = await fileWriter(blog, postId);
			const data = await prisma.post.create({
				data: {
					userId: userId,
					id: postId,
					name: title,
					description: description,
					mdFileName: fileName,
				},
			});
			const tagIds = await Promise.all(
				tags.map(async (tag) => {
					const existingTag = await prisma.tags.findUnique({
						where: { skill: tag },
					});
					if (existingTag) return existingTag.id;

					const newTag = await prisma.tags.create({
						data: { skill: tag, domain: "exampleDomain" },
					});
					return newTag.id;
				}),
			);

			const tagsMapped = await prisma.tagMapper.createMany({
				data: tagIds.map((tagId) => ({ postId: postId, tagId })),
			});
			res.status(201).json({ data: data, tags: tagsMapped });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};

module.exports = { postController };
