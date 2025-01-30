const { fileWriter } = require("../utils/PostWriter");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postController = {
	getMethod: async (req, res) => {
		try {
			const { cursor, limit = 3 } = req.query
			console.log(cursor, limit)
			const limitNumber = parseInt(limit, 10)
			if (isNaN(limitNumber) || limitNumber <= 0) {
				return res.status(400).json({ error: "Invalid limit parameter" });
			}
			let cursorObj = cursor ? { id: cursor } : undefined;
			const data = await prisma.post.findMany({
				take: limitNumber + 1,
				cursor: cursorObj,
				orderBy: { id: 'asc' },
				include: {
					tags: true
				}
			});

			const hasNextPage = data.length > limitNumber;
			const result = hasNextPage ? data.slice(0, -1) : data;
			const nextCursor = hasNextPage ? result[result.length - 1].id : null;

			res.status(200).json({
				data: result,
				pagination: {
					nextCursor: nextCursor,
					hasNextPage: hasNextPage
				}
			});
		}
		catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
	postMethod: async (req, res) => {
		try {
			console.log(req.user);
			const userId = req.user.id;
			const { postId, slug, title, description, tags, blog } = req.body;
			console.log(req.body);
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
					slug: slug,
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
