const parsePath = require("./parsePath")
const error = require("./error")
const errMessage = require("./errMessage")
const isFile = require("./isFile")
const pathExists = require("./pathExists")
const getPath = require("./getPath")
const isReallyFile = require("./isReallyFile")

module.exports = {
	parsePath,
	error,
	errMessage,
	isFile,
	pathExists,
	getPath,
	isReallyFile
}