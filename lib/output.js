const colors = require("colors/safe")

function createLogger(color){
	return line => console.log(color(line))
}

module.exports = {
	end: createLogger(colors.yellow),
	success: createLogger(colors.green)
}