const os = require("os")
const path = require("path")

function getPath(pathData){
	let basePath = path.join(os.homedir(), ".note")
	let relativePath = makePath(":", makePath(".", pathData.path))
	
	return path.join(basePath, relativePath)		
}

module.exports = getPath

function makePath(toReplace, pathString){
	return pathString.replace(new RegExp(`\\${toReplace}`, "g"), path.sep)
}