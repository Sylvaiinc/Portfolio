import type { PrintProps } from "../../components/powerShell"
import type { ShellContextType } from "../../providers/shellProvider"
import { ManageCustomCommand } from "./custom"
import { ManageMainCommand } from "./main"
import { manageSkillCommand } from "./skill"

export const genericCommand = {
	feature: [
		"En attente de la feature"
	],
	default: [
		"Commande non reconnu, tapper help ou h"
	]
}

export interface CommandDeps {
	shell: {
		clear: () => void
		print: (cmd: PrintProps["cmd"], ctx?: PrintProps["ctx"]) => Promise<void>
	},
	docReader: {
		clear: () => void
		exit: () => void
		print: (cmd: PrintProps["cmd"], ctx?: PrintProps["ctx"]) => Promise<void>
	}, 
	context: ShellContextType["context"]
	userChange: (u: string) => void,
  hostNameChange: (h: string) => void,
  symbolChange: (s: string) => void,
	colorChange: (c: string) => void,
}

export const createCommandHandlers = (
  deps: CommandDeps
) => {
  const mainCommand = async (cmd: string) => await ManageMainCommand(cmd, deps)
	const customCommand = async (cmd: string) => await ManageCustomCommand(cmd, deps)
	const skillCommand = async (cmd: string) => await manageSkillCommand(cmd, deps)
  return { mainCommand, customCommand, skillCommand }
}



