import type { CommandDeps } from "./controller"

//https://patorjk.com/software/taag/ slant police
export const projectCommandStr = {
	title: "Liste des projets",
	project: {
		truck2you: [
			"  ______                __  _____  __           ",
			" /_  __/______  _______/ /_|__ \\ \\/ /___  __  __",
			"  / / / ___/ / / / ___/ //_/_/ /\\  / __ \\/ / / /",
			" / / / /  / /_/ / /__/ ,< / __/ / / /_/ / /_/ / ",
			"/_/ /_/   \\__,_/\\___/_/|_/____//_/\\____/\\__,_/  ",
			"       Site de location de transport B2B        ",
			<span>                                                </span>
		],
		portfolio: [
			"    ____             __  ____      ___     ",
			"   / __ \\____  _____/ /_/ __/___  / (_)___ ",
			"  / /_/ / __ \\/ ___/ __/ /_/ __ \\/ / / __ \\",
			" / ____/ /_/ / /  / /_/ __/ /_/ / / / /_/ /",
			"/_/    \\____/_/   \\__/_/  \\____/_/_/\\____/ ",
			"          Theme de démonstration           ",
			<span>                                                </span>
		]
	},
}


export async function manageSkillCommand(cmd:string, deps: CommandDeps) {
	const [base, strPage] = deps.context.current.split("-")
	let page = Number(strPage)
	switch(cmd) {
	}
}