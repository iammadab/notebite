#! /usr/bin/env node
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
		file: ["locator"],
		list: ["locator"],
		open: ["locator"]
	}
})

cli.action("folder", passArg(createFolder))
cli.action("file", passArg(createNote))
cli.action("list", passArg(listFolder))
cli.action("open", passArg(openNote))

cli.parse(process.argv)



function passArg(fn){
	return function({ locator }){
		return fn(locator)
	}
}