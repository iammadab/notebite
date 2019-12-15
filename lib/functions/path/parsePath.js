/*
	Path strings are used to represent locations in the file system from a base point
	At any point in time, any location in a filesystem is either a file or folder
	Files are represented by their name and a colon in front of them
	:file1
	Folders are represented by just their names
	folder1
	
	This building blocks can then be combined to describe a location
	A location can only contain one file, but zero or more folders
	The multiple folders are separated by a period (.) when needed
	Files always end the location string

	Examples of valid location strings
	:file1
	root.subfolder.subsubfolder:file1
	root:rootFile
*/

// Takes a path string, check for validity, existence and return a path representation
function parsePath(pathString){
	let pathData = { path: pathString }

	let pathValidation = validatePath(pathString)
	if(pathValidation.error)
		return addError(pathData, pathValidation)

	if(pathString.includes(":"))
		pathData.isFile = true

	return pathData
}

// console.log(parsePath("folder"))
// console.log(parsePath("root.folder:note"))
// console.log(parsePath(":note"))

module.exports = parsePath


function validatePath(pathString){
	if(!atMostOne(":", pathString))
		return { error: true, message: "More than one file" }

	if(!comesAfterAll(".", ":", pathString))
		return { error: true, message: "File should be at the end of the locator" }

	return { error: false }
}


function addError(pathData, pathValidation){
	pathData.error = true
	pathData.message = pathValidation.message
	return pathData
}





function atMostOne(val, string){
	return count(val, string) < 2
}

function comesAfterAll(hinge, val, string){
	return (string.lastIndexOf(hinge) < string.indexOf(val)) ||
		   (string.lastIndexOf(hinge) == string.indexOf(val))
}



function count(val, string){
	return string.split("").reduce((acc, curr) => {
		return curr == val ? ++acc : acc
	}, 0)
}