const { 
	isFile,
	getPath
} = require("./path")

function createPath(pathData){
	return isFile(pathData) ? 
		   createFile(getPath(pathData)) : 
		   createFolder(getPath(pathData))
}

module.exports = createPath


function createFile(filePath){

}

function createFolder(filePath){
	
}