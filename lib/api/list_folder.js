function listFolder(path){
	let pathData = parsePath(path)
	if(error(pathData))
		return end(errMessage(pathData))

	if(!pathExists(pathData))
		return end("Path does not exist")

	if(isFile(pathData))
		return end("Path must be a folder")

	listPathContent(pathData)
}

module.exports = listFolder