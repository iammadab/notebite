async function createFolder(path){
	let pathData = parsePath(path)
	if(error(pathData))
		return end(errMessage(pathData))

	if(pathExists(pathData))
		return end("Path already exists")

	createPath(pathData)
}

module.exports = createFolder