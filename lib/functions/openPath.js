const { exec } = require("child_process")

function openPath(path){
	let openCommand = buildCommand("open", path)
	return executeCommand(openCommand)
}

module.exports = openPath

function buildCommand(type, path){
	if(type == "open")
		return `notepad ${path}`
	return ""
}

function executeCommand(command){
	return exec(command)
}