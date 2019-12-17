const cli = require("@iammadab/terminaljs")

cli.use({
	commands: {
		folder: ["locator"],
		note: ["locator"],
		list: ["locator"],
		open: ["locator"]
	}
})

cli.parse(process.argv)