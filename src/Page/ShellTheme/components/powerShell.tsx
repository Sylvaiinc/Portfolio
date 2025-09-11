import { useEffect, useState } from "react"
import { bigMoney, blur, ghost, ruby } from "../../../assets/asciiArt"
import { customCommand, genericCommand, mainCommand } from "../asset/command"
import { useShellContext } from "../providers/shellProvider"

export type PowerShellProps = {
	command: {
		new: string
		clean: () => void
	}
}

export default function PowerShell({ command }: PowerShellProps) {
	const [current, setCurrent] = useState<string>("")

	const { 
		fullPrompt,
		context,
		symbolChange,
		userChange,
		hostNameChange,
		content,
		usedProcess,
		processUsed,
	} = useShellContext()

	const print = async (cmd: string | string[]) => {
		usedProcess()
		if(typeof cmd === "object") {
			for(const elem of cmd) {
				await handleInsertSpan(elem)
			}
		} else {
			await handleInsertSpan(cmd)
		}
		usedProcess()
	}

	useEffect(() => {
		const handleMainCommand = async () => {
			switch(command.new) {
				case "help": 
				case "h":
					await print(mainCommand.help)
					break
				case "about skill":
				case "as":
					await print(mainCommand.about)
					break
				case "clear":
				case "c":
					content.clear()
					break
				case "change":
				case "ch":
					await print(customCommand.title)
					await print(customCommand.help)
					context.change("custom")
					break
				default:
					await print(genericCommand.default)
			}
			command.clean()
		}

		const handleCustomCommand = async () => {
			switch(command.new) {
				case "help": 
				case "h":
					await print(customCommand.help)
					break
				case "clear":
				case "c":
					content.clear()
					break
				case "exit":
				case "e":
					await print(customCommand.exit)
					context.change("~")
					break
				default:
					if(command.new.startsWith("user") || command.new.startsWith("up")) {
						const newPrompt = command.new.split(" ")[1] ?? "user"
						userChange(newPrompt)
						await print(customCommand.prompt)
					} else if(command.new.startsWith("hostname") || command.new.startsWith("hp")) {
						const newPrompt = command.new.split(" ")[1] ?? "website"
						hostNameChange(newPrompt)
						await print(customCommand.prompt)
					} else if(command.new.startsWith("color") || command.new.startsWith("c")) {
						await print(genericCommand.default)
					} else if(command.new.startsWith("symbol") || command.new.startsWith("-sy")) {
						const newSymbol = command.new.split(" ")[1] ?? "$"
						symbolChange(newSymbol)
						await print(customCommand.prompt)
					} else {
						await print(genericCommand.default)
					}
			}

			command.clean()
		}

		if (command.new && !processUsed) {
			print(`${fullPrompt} ${command.new}`)
			if(context.current === "custom") {
				handleCustomCommand()
			} else {
				handleMainCommand()
			}
		}
	}, [command.new, processUsed])

	const handleInsertSpan = (text: string, delay: number = 0) => {
		return new Promise<void>((resolve) => {
			setCurrent("")
			const typeChar = (key: number = 0) => {
				if (key < text.length - 1) {
					setCurrent((prev) => prev + text[key -1 ])
					key++
					setTimeout(() => typeChar(key), delay)
				} else {
					content.add(text)
					setCurrent("")
					resolve()
				}
			}

			typeChar()
		})
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
		await print(mainCommand.help)
	}

	useEffect(() => {
		displayMainText()
	}, [])

	return <>
		{content.lines.map((text, idx) => <pre className="w-fit" key={idx}>{text}</pre>)}
		{current && <pre>{current}</pre>}
	</>
}