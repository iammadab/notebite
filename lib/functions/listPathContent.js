const fs = require("fs")

const { 
	isFile,
	getPath
} = require("./path")

async function listPathContent(pathData){
	return readContents(getPath(pathData))
}

module.exports = listPathContent

function readContents(filePath){
	return new Promise((resolve) => {
		fs.readdir(filePath, (err, content) => {
			err ? resolve(false) : resolve(content)
		})
	})
}