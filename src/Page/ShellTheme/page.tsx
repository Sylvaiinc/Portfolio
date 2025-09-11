import {
	useEffect,
	useRef,
	useState,
} from "react"
import PowerShell from "./components/powerShell"
import { useShellContext } from "./providers/shellProvider"

// todo contours tube catodic
export default function ShellTheme() {
  const [value, setValue] = useState("")
  const [command, setCommand] = useState<string>("")
	const [inputWidth, setInputWidth] = useState(0)
  const spanRef = useRef<HTMLSpanElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
    if (spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth + 2)
    }
  }, [value])

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && inputRef.current) {
			setCommand(inputRef.current.value)
			inputRef.current.value = ""
		}
	}

	const { fullPrompt, processUsed } = useShellContext()

	return <main
		className="flex flex-col w-full overflow-hidden min-h-screen text-green-400 font-mono p-5"
		onClick={() => inputRef.current?.focus()}
	>
		<section className="flex flex-col leading-none whitespace-pre font-mono">
			<PowerShell
				command={{
					new: command,
					clean: () => setCommand("")
				}}
			/>
		</section>
		{!processUsed && <section className="flex w-full">
			<span className="mr-2">{fullPrompt}</span>
			<input
				ref={inputRef}
				type="text"
				onKeyDown={handleKeyPress}
				onChange={(e) => setValue(e.target.value)}
				style={{ width: `${inputWidth}px` }}
				className="focus:outline-none"
			/>
			<span ref={spanRef} className="absolute invisible whitespace-pre font-mono text-base">
				{value || ""}
			</span>
		</section>}
	</main>
}