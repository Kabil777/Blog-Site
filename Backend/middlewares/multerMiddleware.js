const multer = require("multer")
const fs = require("fs")
const path = require("path")

const uploadFolder = path.join(__dirname, "uploads")
if (!fs.existsSync(uploadFolder)) {
	fs.mkdirSync(uploadFolder, { recursive: true })
}
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadFolder)
	},
	filename: (req, file, cb) => {
		const postId = req.body.id;
		cb(null, `${file.filename}-${postId}`)
	}
})

module.exports = { storage }
