import { genericCommand, type CommandDeps } from "./controller"

export const customCommandStr = {
	title: [
		"Mode de customisation du portfolio PowerShell"
	],
	help: [
		"Commandes du mode customisation :",	
		"|         Commande            |       raccourci       | résultat  ",
		"------------------------------------------------------------------",
		"|      user <newPrompt>       |      up  <newPrompt>  | Change le prompt de l'utilisateur",
		"------------------------------------------------------------------",
		"|     hostname <newPrompt>    |      hp  <newPrompt>  | Change le prompt du hostname",
		"------------------------------------------------------------------",
		"|     symbol <newPrompt>      |      sp  <newPrompt>  | Change le symbol du prompt",
		"------------------------------------------------------------------",
		"|      color <colorHexa>      |       c <colorHexa>   | Change la couleur du text",
		"------------------------------------------------------------------",
		"|            clear            |           c           | Vide l'écran",
		"------------------------------------------------------------------",
		"|            exit             |           e           | Quitte le mode custom",
		"------------------------------------------------------------------",
		"|            help             |           h           | Affiche les commandes",
		"------------------------------------------------------------------"
	],
	exit: [
		"Retour à la commande principale"
	],
	success: [
		"Modification effectuée avec succès"
	]
}

export async function ManageCustomCommand(cmd: string, deps: CommandDeps) {
	const [base, arg] = cmd.split(" ")
  const value = arg ?? ""

	switch(base) {
		case "help": 
		case "h":
			await deps.shell.print(customCommandStr.help)
			break
		case "user":
		case "up":
			deps.userChange(value || "user")
			await deps.shell.print(customCommandStr.success)
			break
		case "hostname":
		case "hp":
			deps.hostNameChange(value || "website")
			await deps.shell.print(customCommandStr.success)
			break
		case "color":
		case "c":
			let color = "#05df72"
			if(arg) {
				color = arg.startsWith("#") ?  arg : `#${arg}`
			}
			deps.colorChange(color)
			await deps.shell.print(customCommandStr.success)
			break
		case "symbol":
		case "sy":
			deps.symbolChange(value)
			await deps.shell.print(customCommandStr.success)
			break
		case "clear":
		case "c":
			deps.shell.clear()
			break
		case "exit":
		case "e":
			await deps.shell.print(customCommandStr.exit)
			deps.context.change("~")
			break
		default:
			await deps.shell.print(genericCommand.default)
	}
}