function pathExists(pathData){
	let completePath = getPath(pathData)
	return checkPath(completePath)
}