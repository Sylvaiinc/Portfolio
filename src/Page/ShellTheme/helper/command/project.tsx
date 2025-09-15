import { useNavigate } from "react-router-dom"
import { genericCommand, type CommandDeps } from "./controller"

//https://patorjk.com/software/taag/ slant police
export const projectCommandStr = {
	title: "Mode project du powershell",

	project: {
		truck2you: [
			"  ______                __  _____  __           ",
			" /_  __/______  _______/ /_|__ \\ \\/ /___  __  __",
			"  / / / ___/ / / / ___/ //_/_/ /\\  / __ \\/ / / /",
			" / / / /  / /_/ / /__/ ,< / __/ / / /_/ / /_/ / ",
			"/_/ /_/   \\__,_/\\___/_/|_/____//_/\\____/\\__,_/  ",
			"       Site de location de transport B2B        ",
			"            <<1 voir plus>>                     ",
			"                                                "
		],
		portfolio: [
			"    ____             __  ____      ___          ",
			"   / __ \\____  _____/ /_/ __/___  / (_)___      ",
			"  / /_/ / __ \\/ ___/ __/ /_/ __ \\/ / / __ \\     ",
			" / ____/ /_/ / /  / /_/ __/ /_/ / / / /_/ /     ",
			"/_/    \\____/_/   \\__/_/  \\____/_/_/\\____/      ",
			"              Site CV principal                 ",
			"            <<2 changer de theme>>              ",
			"                                                "
		] 
	},
	exit: "            <<3 quitter le doc>>                "
}

export async function manageProjectCommand(cmd:string, deps: CommandDeps) {
	switch(cmd) {
		case "1":
			break
		case "2":
			deps.navigate("/")
			break
		case "3":
			break
		default:
			await deps.shell.print(genericCommand.default)
	}
}