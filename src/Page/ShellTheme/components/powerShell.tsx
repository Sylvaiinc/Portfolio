import { useEffect, useState } from "react"
import { bigMoney, blur, ghost, ruby } from "../../../assets/asciiArt"
import { useShellContext } from "../providers/shellProvider"
import { mainCommandStr } from "../helper/command/main"
import { createCommandHandlers } from "../helper/command/controller"
import { useNavigate } from "react-router-dom"

export interface PowerShellProps {
	command: {
		new: string
		clean: () => void
	}
	addError: () => void
}

export interface PrintProps {
	ctx: "shell" | "doc"
	cmd: string | string[]
}

export default function PowerShell({ command, addError }: PowerShellProps) {
	const navigate = useNavigate()
	const [current, setCurrent] = useState<string>("")
	const { 
		content,
		context,
		fullPrompt,
		processUsed,
		textColor,
		symbolChange,
		userChange,
		hostNameChange,
		usedProcess,
	} = useShellContext()

	const print = async (cmd: PrintProps["cmd"], ctx: PrintProps["ctx"] = "shell") => {
		usedProcess()
		const cmds = Array.isArray(cmd) ? cmd : [cmd];
		for (const elem of cmds) {
			await handleInsertShell(elem, ctx);
		}
		usedProcess()
	}

	const { mainCommand, customCommand, skillCommand, projectCommand } = createCommandHandlers({
		context,
		shell: {
			clear: content.shell.clear,
			print: (cmd: PrintProps["cmd"]) => print(cmd, "shell")
		},
		docReader: {
			clear: content.docReader.clear,
			print: (cmd: PrintProps["cmd"]) => print(cmd, "doc"),
			exit: content.docReader.exit
		},
		addError,
		colorChange: textColor.change,
		hostNameChange,
		navigate,
		symbolChange,
		userChange
	})

	useEffect(() => {
		if(command.new && !processUsed) {
			if(context.current === "custom") {
				content.shell.add(`${fullPrompt} ${command.new}`)
				customCommand(command.new)
			} else if(context.current.startsWith("skill")) {
				skillCommand(command.new)
			} else if(context.current === "project") {
				projectCommand(command.new)
			} else {
				content.shell.add(`${fullPrompt} ${command.new}`)
				mainCommand(command.new)
			}
			command.clean()
		}
	}, [command.new, processUsed])

	const handleInsertShell = async (text: string, ctx: PrintProps["ctx"], delay: number = 0) => {
		setCurrent("")
		for(const char of text) {
			setCurrent((prev) => prev + char)
			if (delay > 0) await new Promise((res) => setTimeout(res, delay))
		}
		(ctx === "shell" ? content.shell : content.docReader).add(text)
		setCurrent("")
	}

	const displayMainText = async () => {
		const arts = [bigMoney, blur, ghost, ruby];
		const art = arts[Math.floor(Math.random() * arts.length)]
		await print(art)
		await print(mainCommandStr.help)
	}

	useEffect(() => {
		// todo remove comment
		// displayMainText()
	}, [])

	return <>
		{content.docReader.lines.length === 0 && <div>
			{content.shell.lines.map((text, idx) => <pre className="w-fit" key={idx}>{text}</pre>)}
			{current && <pre>{current}</pre>}
		</div>}
		{content.docReader.lines.length !== 0 && <div className="flex flex-col w-full items-center">
			{content.docReader.lines.map((text, idx) => <span className="w-fit" key={idx}>{text}</span>)}
			{current && <span>{current}</span>}
		</div>}
	</>
}
