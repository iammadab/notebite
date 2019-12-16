const fs = require("fs")
const path = require("path")

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
	return new Promise((resolve) => {
		fs.writeFile(filePath, "", (err) => {
			if(err && err.code == "ENOENT")
				makeMissingFolders(filePath, resolve)
			else
				err ? resolve(false) : resolve(true)
		})
	})
}

function createFolder(filePath){
	return new Promise((resolve) => {
		fs.mkdir(filePath, { recursive: true }, (err) => {
			err ? resolve(false) : resolve(true)
		})
	})
}


async function makeMissingFolders(filePath, resolve){
	let result = await createFolder(removeFile(filePath))
	result = await createFile(filePath)
	resolve(result)
}

function removeFile(filePath){
	let parts = filePath.split(path.sep)
	parts.pop()
	return parts.join(path.sep)
}