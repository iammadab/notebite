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
	console.log("Creating file")
	console.log(filePath)
	return new Promise((resolve) => {
		fs.writeFile(filePath, "", (err) => {
			err ? resolve(false): resolve(true)
		})
	})
}

function createFolder(filePath){
	console.log(filePath)
	return new Promise((resolve) => {
		fs.mkdir(filePath, (err) => {
			err ? resolve(false) : resolve(true)
		})
	})
}