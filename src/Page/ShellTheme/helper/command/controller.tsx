import type { NavigateFunction } from "react-router-dom"
import type { ModalContext, PrintProps } from "@Shell/components/powerShell"
import type { ShellContextType } from "@Shell/providers/shellProvider"
import { ManageCustomCommand } from "./custom"
import { ManageMainCommand } from "./main"
import { manageProjectCommand } from "./project"
import { manageSkillCommand } from "./skill"

export const genericCommand = {
	feature: "En attente de la feature",
	default: "Commande non reconnue, tapper help ou h",
	doc: "Document en cours de lecture",
}

export interface CommandDeps {
	shell: {
		clear: () => void
		print: (cmd: PrintProps["cmd"]) => Promise<void>
	},
	docReader: {
		clear: () => void
		exit: () => void
		print: (cmd: PrintProps["cmd"]) => Promise<void>
	}, 
	context: ShellContextType["context"]
	addError: () => void,
	colorChange: (c: string) => void,
  hostNameChange: (h: string) => void,
	navigate: NavigateFunction
  symbolChange: (s: string) => void,
	userChange: (u: string) => void,
	usedProcess: () => void
	modalContextChange: (c: ModalContext) => void
}

export const createCommandHandlers = (
  deps: CommandDeps
) => {
  const mainCommand = async (cmd: string) => await ManageMainCommand(cmd, deps)
	const customCommand = async (cmd: string) => await ManageCustomCommand(cmd, deps)
	const skillCommand = async (cmd: string) => await manageSkillCommand(cmd, deps)
	const projectCommand = async (cmd: string) => await manageProjectCommand(cmd, deps)
  return { mainCommand, customCommand, skillCommand, projectCommand }
}



