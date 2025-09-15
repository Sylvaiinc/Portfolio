import { genericCommand, type CommandDeps } from "./controller"
import { customCommandStr } from "./custom"
import { projectCommandStr } from "./project"
import { skillCommandStr } from "./skill"

export const mainCommandStr = {
	title: "Mode principal du portfolio powershell",
	help: [
		"Commandes principales :",
		"|   Commande  |  raccourci  |  résultat ",
		"+-------------+-------------+----------------",
		"|   change    |       ch    | Personnalise le shell",
		"+-------------+-------------+----------------",
		"|    clear    |       c     | Vide l’écran",
		"+-------------+-------------+----------------",
		"|    help     |       h     | Affiche les commandes",
		"+-------------+-------------+----------------",
		"|   project   |       p     | Affiche les projets",
		"+-------------+-------------+----------------",
		"|    skill    |       s     | Affiche les compétences",
		"+-------------+-------------+----------------",
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
			await deps.shell.print(genericCommand.doc)
			await deps.docReader.print(skillCommandStr.title)
			await deps.docReader.print(skillCommandStr.info)
			await deps.docReader.print(skillCommandStr.page[0])
			await deps.docReader.print(skillCommandStr.scroll)
			break
		case "clear":
		case "c":
			deps.shell.clear()
			break
		case "project":
		case "p":
			deps.context.change("project")
			await deps.shell.print(genericCommand.doc)
			await deps.docReader.print(projectCommandStr.project.truck2you)
			await deps.docReader.print(projectCommandStr.breakLine)
			await deps.docReader.print(projectCommandStr.project.portfolio)
			await deps.docReader.print(projectCommandStr.breakLine)
			await deps.docReader.print(projectCommandStr.exit)
			break
		case "change":
		case "ch":
			deps.context.change("custom")
			await deps.shell.print(customCommandStr.help)
			break
		default:
			deps.addError()
			await deps.shell.print(genericCommand.default)
	}
}