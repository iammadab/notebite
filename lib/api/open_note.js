const {
	parsePath,
	error,
	errMessage,
	isFile,
	pathExists
} = require("../functions/path")

let end = console.log

function openNote(path){
	let pathData = parsePath(path)
	console.log(pathData)
	if(error(pathData))
		return end(errMessage(pathData))

	if(!isFile(pathData))
		return end("Path should be a file")

	if(!pathExists(pathData))
		return end("Path does not exist")

	openPath(pathData)
}

openNote("folder.note")

function openPath(){
	console.log("Got to open path")
}