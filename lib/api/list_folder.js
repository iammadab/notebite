const { end, file, folder } = require("../output")
const {
	parsePath,
	error,
	errMessage,
	isFile,
	pathExists,
	isReallyFile
} = require("../functions/path")

const listPathContent = require("../functions/listPathContent")

async function listFolder(path){
	let pathData = parsePath(path)
	if(error(pathData))
		return end(errMessage(pathData))

	if(!await pathExists(pathData))
		return end("Path does not exist")

	if(isFile(pathData))
		return end("Path must be a folder")

	if(await isReallyFile(pathData))
		return end("Path must be a folder")

	let contents = await listPathContent(pathData)
	printContent(contents)
}

module.exports = listFolder

function printContent(contents){
	contents.forEach(content => {
		if(content.startsWith("f"))
			file(content)
		else
			folder(content)
	})
}