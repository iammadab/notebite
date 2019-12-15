async function openNote(path){
	let windowsPath = generateWindowsPath(path)
	if(windowsPath.error)
		return end(windowsPath.message)
	openPath(windowsPath)
}