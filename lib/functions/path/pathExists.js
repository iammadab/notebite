const fs = require("fs")
const getPath = require("./getPath")

function pathExists(pathData){
	let completePath = getPath(pathData)
	return checkPath(completePath)
}

module.exports = pathExists

function checkPath(completePath){
	console.log(completePath)
	return new Promise(resolve => {
		fs.access(completePath, fs.F_OK, (err) => {
			err ? resolve(false) : resolve(true)
		})
	})
}