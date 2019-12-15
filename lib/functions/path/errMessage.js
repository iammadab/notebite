const error = require("./error")

function errMessage(pathData){
	return error(pathData) ? pathData.message : ""
}

module.exports = errMessage