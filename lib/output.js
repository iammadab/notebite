const colors = require("colors/safe")

function createLogger(color){
	return line => console.log(color(line))
}

module.exports = {
	end: createLogger(colors.bgRed),
	success: createLogger(colors.green),
	file: createLogger(colors.yellow),
	folder: createLogger(colors.gray)
}