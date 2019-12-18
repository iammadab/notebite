const colors = require("colors/safe")

function createLogger(color){
	return line => console.log(color(line))
}

module.exports = {
	red: createLogger(colors.red)
}