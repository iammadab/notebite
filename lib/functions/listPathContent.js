const fs = require("fs")
const path = require("path")

const { 
	isFile,
	getPath
} = require("./path")

async function listPathContent(pathData){
	let basePath = getPath(pathData)
	let contents = await readContents(basePath)
	return await makeVerbose(contents, basePath)
}

module.exports = listPathContent

function readContents(filePath){
	return new Promise((resolve) => {
		fs.readdir(filePath, (err, content) => {
			err ? resolve(false) : resolve(content)
		})
	})
}

async function makeVerbose(contents, basePath){
	let verboseContent = []
	for(let i = 0; i < contents.length; i++){
		let content = contents[i], fullPath = combinePath(basePath, content)
		 verboseContent.push(await isFolder(fullPath) ? `d ${content}` : `f ${content}`)
	}
	return verboseContent
}