const fs = require("fs").promises
const path = require("path")
const { ensureDirectoryExists } = require("./EnsureDir")

const fileWriter = async (blogData, id) => {
	try {
		const folderPath = path.join(__dirname, "..", "uploads")
		await ensureDirectoryExists(folderPath)
		const filePath = path.join(folderPath, `${id}.md`)
		await fs.writeFile(filePath, JSON.stringify(blogData, null, 2))
		const content = await fs.readFile(filePath, "utf8")
		return filePath
	}
	catch (error) {
		return error
	}
}

module.exports = { fileWriter }
