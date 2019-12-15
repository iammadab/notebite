function createFolder(path){
	let pathData = parsePath(path)
	if(error(pathData))
		return end(errMessage(pathData))

	if(isFile(pathData))
		return end("Path is not a folder")

	if(pathExists(pathData))
		return end("Path already exists")

	createPath(pathData)
}

module.exports = createFolder