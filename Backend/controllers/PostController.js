const { fileWriter } = require("../utils/PostWriter");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postController = {
	getMethod: async (req, res) => {
		try {
			const userId = req.user.id;
			const { sortByLikes } = req.query;
			const data = await prisma.post.findMany({
				take: sortByLikes ? 3 : 5,
				orderBy: sortByLikes ? { like: { _count: "desc" } } : { createdAt: "desc" },
				select: {
					createdAt: true,
					id: true,
					slug: true,
					name: true,
					description: true,
					user: {
						select: {
							id: true,
							name: true,
							email: true,
							profileCover: true,
						},
					},
					tags: {
						select: {
							tag: {
								select: {
									skill: true,
								},
							},
						},
					},
					_count: {
						select: {
							like: true
						},
					},
					like: {
						select: {
							userId: true
						}
					}
				},
			});
			const modifiedData = data.map((post) => ({
				...post,
				isLiked: post.like.some((like) => like.userId === userId)

			}));
			return res.json({
				data: modifiedData,
			});
		} catch (error) {
			return res.status(401).json({ error: error.message });
		}
	},
	postMethod: async (req, res) => {
		try {
			console.log(req.user);
			const userId = req.user.id;
			const { postId, slug, title, description, tags, blog, likes } = req.body;
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
					likes: likes,
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
