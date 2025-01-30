const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const PostRequestController = {
	getMethod: async (req, res) => {
		try {
			const { slugId } = req.params;
			const lastHypenIndex = slugId.lastIndexOf("-");
			const slug = slugId.substring(0, lastHypenIndex);
			const id = slugId.substring(lastHypenIndex + 1);
			const data = await prisma.post.findUnique({
				where: {
					id: id,
				},
				include: {
					tags: {},
				},
			});
			const tags = await prisma.tags.findUnique({
				where: {
					id: data.tags[0].tagId,
				},
			});
			res.json({ data: data, tags: tags });
		} catch (error) {
			res.status(400).send("bad request");
		}
	},
};

module.exports = { PostRequestController };
