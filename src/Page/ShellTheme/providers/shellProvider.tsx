import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export interface ShellContextType {
	context: {
		current: string,
		change: (c: ContextType) => void
	}
	content: {
		shell: {
			lines: string[],
			add: (l: string) => void
			clear: () => void
		},
		docReader: {
			lines: string[],
			add: (l: string) => void
			clear: () => void,
			exit: () => void
		},
	}
	fullPrompt: string
	processUsed: boolean
	textColor: {
		current: string
		change: (c: string) => void
	}
	userChange: (p: string) => void
	symbolChange: (s: string) => void
	hostNameChange: (h: string) => void
	usedProcess: () => void
}

const ShellContext = createContext<ShellContextType | undefined>(undefined)

export type ContextType = "~" | "custom" | `skill-${number}` | "project"

export function ShellProvider({ children }: { children: ReactNode }) {
	const [context, setContext] = useState<ContextType>("~")
	const [symbol, setSymbol] = useState("$")
	const [ShellLines, setShellLines] = useState<string[]>([])
	const [docReaderLines, setDocReaderLines] = useState<string[]>([])
	const [user, setUser] = useState("user")
	const [hostName, setHostName] = useState("webSite")
	const [fullPrompt, setFullPrompt] = useState("")
	const [isWriting, setIsWriting] = useState(false)
	const [textColor, setTextColor] = useState("#05df72")

	useEffect(() => {
		setFullPrompt(`${user}@${hostName}: ${context}${symbol}`)
	}, [user, context, hostName, symbol])

	return <ShellContext.Provider value={{
		context: {
			current: context,
			change: setContext,
		},
		content: {
			shell: {
				lines: ShellLines,
				add: (l) => setShellLines((prev) => [...prev, l]),
				clear: () => setShellLines([])
			},
			docReader: {
				lines: docReaderLines,
				add: (l) => setDocReaderLines((prev) => [...prev, l]),
				clear: () => setDocReaderLines([""]),
				exit: () => setDocReaderLines([])
			}
		},
		textColor: {
			change: (s) => setTextColor(s),
			current: textColor
		},
		processUsed: isWriting,
		usedProcess: () => setIsWriting(prev => !prev),
		userChange: setUser,
		symbolChange: setSymbol,
		hostNameChange: setHostName,
		fullPrompt,
	}}>
		{children}
	</ShellContext.Provider>
}

export function useShellContext() {
	const context = useContext(ShellContext)
	if(!context) {
		throw new Error('useShellContext doit être utilisé dans un ShellProvider')
	}
	return context
}