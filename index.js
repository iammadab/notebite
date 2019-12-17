const cli = require("@iammadab/terminaljs")
const {
	createFolder,
	createNote, 
	listFolder, 
	openNote
} = require("./lib/api")

cli.use({
	commands: {
		folder: ["locator"],
		note: ["locator"],
		list: ["locator"],
		open: ["locator"]
	}
})

cli.use("folder", createFolder)
cli.use("note", createNote)
cli.use("list", listFolder)
cli.use("open", openNote)

cli.parse(process.argv)