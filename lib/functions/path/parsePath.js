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

}

module.exports = parsePath