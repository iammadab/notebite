const {
	parsePath,
	error,
	errMessage,
	isFile,
	pathExists
} = require("../functions/path")

const listPathContent = require("../functions/listPathContent")

let end = console.log

async function listFolder(path){
	let pathData = parsePath(path)
	if(error(pathData))
		return end(errMessage(pathData))

	if(!await pathExists(pathData))
		return end("Path does not exist")

	if(isFile(pathData))
		return end("Path must be a folder")

	return listPathContent(pathData)
}

module.exports = listFolder