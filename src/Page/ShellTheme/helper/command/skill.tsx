import type { CommandDeps } from "./controller"

export const skillCommandStr = {
	title: "Navigation dans les compétences",
	page: [
		[
			"Front-end :                         ",
			"|      Skill       |     Level     |",
			"+------------------+---------------+",
			"|   HTML / CSS     |    Expert     |",
			"+------------------+---------------+",
			"|     JS / TS      |    Avancé     |",
			"+------------------+---------------+",
			"|      React       |    Avancé     |",
			"+------------------+---------------+",
			"|  React Native    |    Avancé     |",
			"+------------------+---------------+",
			"|     Symfony      |    Avancé     |",
			"+------------------+---------------+",
			"|     Tailwind     |    Avancé     |",
			"+------------------+---------------+",
		],
		[
			"Back-end :                          ",
			"|      Skill       |     Level     |",
			"+------------------+---------------+",
			"|     Node.js      |    Avancé     |",
			"+------------------+---------------+",
			"|     Python       | Intermédiaire |",
			"+------------------+---------------+",
			"|     Symfony      |    Avancé     |",
			"+------------------+---------------+",
			"|       PHP        |    Avancé     |",
			"+------------------+---------------+",
		],
		[
			"Bases de données :                  ",
			"|      Skill       |     Level     |",
			"+------------------+---------------+",
			"|     MySQL        |    Avancé     |",
			"+------------------+---------------+",
			"|   PostgreSQL     |    Avancé     |",
			"+------------------+---------------+",
			"|    MongoDB       | Intermédiaire |",
			"+------------------+---------------+",
		],
		[
			"DevOps :                            ",
			"|      Skill       |     Level     |",
			"+------------------+---------------+",
			"|     Docker       | Intermédiaire |",
			"+------------------+---------------+",
			"|      OVH         | Intermédiaire |",
			"+------------------+---------------+",
		],
		[
			"Autres :                            ",
			"|      Skill       |     Level     |",
			"+------------------+---------------+",
			"|      Git         |    Expert     |",
			"+------------------+---------------+",
			"|     Figma        | Intermédiaire |",
			"+------------------+---------------+",
			"|      Jira        | Intermédiaire |",
			"+------------------+---------------+",
			"|     Agile        |    Avancé     |",
			"+------------------+---------------+",
			"|    V-Cycle       |    Avancé     |",
			"+------------------+---------------+"
		],
	],
	succes: "Document en cours de lecture",
	scroll: "<<(1) Page Précédente - (0) exit - Page Suivante (2)>>",
	info: "Taper 1 ou 2 pour naviguer, 0 pour quitter"
}

export async function manageSkillCommand(cmd:string, deps: CommandDeps) {
	const [base, strPage] = deps.context.current.split("-")
	let page = Number(strPage)
	if(base !== "skill") {
		deps.shell.print(skillCommandStr.info)
		return
	}
	switch(cmd) {
		case "1":
			page = (Number(page) === 1 ? skillCommandStr.page.length : Number(page) - 1)
			deps.context.change(`${base}-${page}`)
			deps.docReader.clear()
			await deps.docReader.print(skillCommandStr.page[page - 1])
			await deps.docReader.print(skillCommandStr.scroll)
			break
		case "2":
			page = (Number(page) === skillCommandStr.page.length ? 1 : Number(page) + 1)
			deps.context.change(`${base}-${page}`)
			deps.docReader.clear()
			await deps.docReader.print(skillCommandStr.page[page - 1])
			await deps.docReader.print(skillCommandStr.scroll)
			break
		case "0":
			deps.docReader.exit()
			deps.context.change("~")
			break
	}
}