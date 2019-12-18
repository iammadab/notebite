const { end, success } = require("../output")
const {
	parsePath,
	error,
	errMessage,
	isFile,
	pathExists
} = require("../functions/path")

const createPath = require("../functions/createPath")

async function createFolder(path){
	let pathData = parsePath(path)
	if(error(pathData))
		return end(errMessage(pathData))

	if(isFile(pathData))
		return end("Path is not a folder")

	if(await pathExists(pathData))
		return end("Path already exists")

	let folderResult = await createPath(pathData)

	folderResult ? success("Created folder successfully") : end("Failed to create folder")
}

module.exports = createFolder