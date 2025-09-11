import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface ShellContext {
	context: {
		current: string,
		change: (c: string) => void
	}
	content: {
		lines: string[],
		add: (l: string) => void
		clear: () => void
	}
	userChange: (p: string) => void
	symbolChange: (s: string) => void
	hostNameChange: (h: string) => void
	fullPrompt: string
	usedProcess: () => void
	processUsed: boolean
}

const ShellContext = createContext<ShellContext| undefined>(undefined)

export function ShellProvider({ children }: { children: ReactNode }) {
	const [context, setContext] = useState("~")
	const [symbol, setSymbol] = useState("$")
	const [lines, setLines] = useState<string[]>([])
	const [user, setUser] = useState("user")
	const [hostName, setHostName] = useState("webSite")
	const [fullPrompt, setFullPrompt] = useState("")
	const [isWriting, setIsWriting] = useState(false)

	useEffect(() => {
		setFullPrompt(`${user}@${hostName}: ${context}${symbol}`)
	}, [user, context, hostName, symbol])

	return <ShellContext.Provider value={{
		context: {
			current: context,
			change: setContext,
		},
		content: {
			lines,
			add: (l) => setLines((prev) => [...prev, l]),
			clear: () => setLines([])
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
	if (!context) {
		throw new Error('useShellContext doit être utilisé dans un ShellProvider')
	}
	return context
}