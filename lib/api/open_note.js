async function openNote(path){
	let openInstruction = generateInstruction("open", path)
	executeCommand(openInstruction)
}

module.exports = openNote