async function openNote(path){
	let windowsPath = generateWindowsPath(path)
	if(windowsPath.error)
		return end(windowsPath.message)

	let pathExists = pathShouldExist(windowsPath)
	if(pathExists.error)
		return end(pathExists.message)

	openPath(windowsPath)
}