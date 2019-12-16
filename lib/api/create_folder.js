const {
	parsePath,
	error,
	errMessage,
	isFile,
	pathExists
} = require("../functions/path")

const createPath = require("../functions/createPath")

let end = console.log

async function createFolder(path){
	let pathData = parsePath(path)
	if(error(pathData))
		return end(errMessage(pathData))

	if(isFile(pathData))
		return end("Path is not a folder")

	if(await pathExists(pathData))
		return end("Path already exists")

	let folderResult = await createPath(pathData)
	console.log("Folder result", folderResult)

	folderResult ? end("Created folder successfully") : end("Failed to create folder")
}

module.exports = createFolder