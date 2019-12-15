const {
	parsePath,
	error,
	errMessage,
	isFile,
	pathExists
} = require("../functions/path")

const createPath = require("../functions/createPath")

let end = console.log

async function createNote(path){
	let pathData = parsePath(path)
	if(error(pathData))
		return end(errMessage(pathData))

	if(!isFile(pathData))
		return end("Path is not a file")

	if(await pathExists(pathData))
		return end("Path already exists")

	createPath(pathData)
}

module.exports = createNote

createNote(":second")