const { end } = require("../output")
const {
	parsePath,
	error,
	errMessage,
	isFile,
	pathExists,
	getPath,
	isReallyFile
} = require("../functions/path")

const openPath = require("../functions/openPath")

let end = console.log

async function openNote(path){
	let pathData = parsePath(path)
	if(error(pathData))
		return end(errMessage(pathData))

	if(!isFile(pathData))
		return end("Path should be a file")

	if(!await isReallyFile(pathData))
		return end("Path should be a file")

	if(!await pathExists(pathData))
		return end("Path does not exist")

	openPath(getPath(pathData))
}

module.exports = openNote