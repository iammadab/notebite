function openNote(path){
	let pathData = parsePath(path)
	if(error(pathData))
		return end(errMessage(pathData))

	if(!isFile(pathData))
		return end("Path should be a file")

	if(!pathExists(pathData))
		return end("Path does not exist")

	openPath(windowsPath)
}