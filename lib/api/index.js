const createFolder = require("./create_folder")
const createNote = require("./create_note")
const listFolder = require("./list_folder")
const openNote = require("./open_note")

let apis = {
	createFolder,
	createNote,
	listFolder,
	openNote
}

module.exports = apis