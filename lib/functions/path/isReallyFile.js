const fs = require("fs")
const getPath = require("./getPath")

function isReallyFile(pathData){
	let completePath = getPath(pathData)
	return checkIfFile(completePath)
}

module.exports = isReallyFile

function checkIfFile(completePath){
	return new Promise(resolve => {
		fs.lstat(completePath, (err, stat) => {
			err ? resolve(false) : resolve(stat.isFile())
		})
	})
}