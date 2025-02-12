const fs = require('fs').promises
const path = require('path')

const postReader = async (postId) => {
	try {
		const filePath = path.join(__dirname, "..", "uploads", `${postId.trim()}.md`)
		const filecontent = await fs.readFile(filePath, 'utf8')
		return filecontent
	}
	catch (error) {
		return error
	}
}

module.exports = { postReader }
