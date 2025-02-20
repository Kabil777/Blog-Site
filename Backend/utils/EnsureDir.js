const fs = require("fs").promises;

const ensureDirectoryExists = async (folderPath) => {
	try {
		await fs.access(folderPath);
		console.log("Folder exists:", folderPath);
	} catch (error) {
		if (error.code === "ENOENT") {
			console.log("Folder does not exist. Creating:", folderPath);
			await fs.mkdir(folderPath, { recursive: true });
		} else {
			throw new Error(`Error checking or creating folder: ${error.message}`);
		}
	}
};

module.exports = { ensureDirectoryExists };
