async function createNote(path){
	let pathData = parseData(path)
	if(error(pathData))
		return end(errMessage(pathData))

	if(!isFile(pathData))
		return end("Path is not a file")

	if(pathExists(pathData))
		return end("Path already exists")

	createPath(pathData)
}

module.exports = createNote