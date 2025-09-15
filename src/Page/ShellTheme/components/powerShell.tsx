import { useEffect, useState } from "react"
import { bigMoney, blur, ghost, ruby } from "../../../assets/asciiArt"
import { useShellContext } from "../providers/shellProvider"
import { mainCommandStr } from "../helper/command/main"
import { createCommandHandlers } from "../helper/command/controller"

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

		if(typeof cmd === "object") {
			for(const elem of cmd) {
				await handleInsertShell(elem, ctx)
			}
		} else {
			await handleInsertShell(cmd, ctx)
		}
		usedProcess()
	}

	const { mainCommand, customCommand, skillCommand } = createCommandHandlers({
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
		context,
		colorChange: textColor.change,
		hostNameChange,
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
			} else {
				content.shell.add(`${fullPrompt} ${command.new}`)
				mainCommand(command.new)
			}
			command.clean()
		}
	}, [command.new, processUsed])

	const handleInsertShell = async (text: string, ctx: PrintProps["ctx"], delay: number = 0) => {
		setCurrent("")
		for(let char of text) {
			setCurrent((prev) => prev + char)
			await new Promise((res) => setTimeout(res, delay))
		}

		if(ctx === "shell") {
			content.shell.add(text)
		} else {
			content.docReader.add(text)
		}
		setCurrent("")
	}

	const displayMainText = async () => {
		const choice = Math.floor(Math.random() * 4) + 1
		let art: string[] = []

		switch (choice) {
			case 1:
				art = bigMoney
				break
			case 2:
				art = blur
				break
			case 3:
				art = ghost
				break
			case 4:
				art = ruby
				break
		}
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
