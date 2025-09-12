import { genericCommand, type CommandDeps } from "./controller"
import { customCommandStr } from "./custom"
import { skillCommandStr } from "./skill"

export const mainCommandStr = {
	title: [
		"Mode principal du portfolio powershell"
	],
	help: [
		"Commandes principales :",
		"|   Commande  |  raccourci  |  résultat ",
		"---------------------------------",
		"|    clear    |       c     | Vide l’écran",
		"---------------------------------",
		"|    skill    |       s     | Affiche les compétences",
		"---------------------------------",
		"|   change    |       ch    | Personnalise le shell",
		"---------------------------------",
		"|    help     |       h     | Affiche les commandes",
		"---------------------------------",
	],
}
export async function ManageMainCommand(cmd: string, deps: CommandDeps) {
	switch(cmd) {
		case "help": 
		case "h":
			await deps.shell.print(mainCommandStr.help)
			break
		case "skill":
		case "s":
			deps.context.change("skill-1")
			await deps.shell.print(skillCommandStr.succes)
			await deps.docReader.print(skillCommandStr.title, "doc")
			await deps.docReader.print(skillCommandStr.info, "doc")
			await deps.docReader.print(skillCommandStr.page[0], "doc")
			await deps.docReader.print(skillCommandStr.scroll, "doc")
			break
		case "clear":
		case "c":
			deps.shell.clear()
			break
		case "change":
		case "ch":
			deps.context.change("custom")
			await deps.shell.print(customCommandStr.help)
			break
		default:
			await await deps.shell.print(genericCommand.default)
	}
}