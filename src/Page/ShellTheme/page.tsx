import {
	useEffect,
	useRef,
	useState,
} from "react"
import PowerShell from "./components/powerShell"
import { useShellContext } from "./providers/shellProvider"
import { typeSound } from "./helper/song/controler"
import "./page.css"
import { HelperModal } from "./components/helperModal"

// todo contours tube catodic
export default function ShellTheme() {
  const [value, setValue] = useState("")
  const [command, setCommand] = useState<string>("")
	const [inputWidth, setInputWidth] = useState(0)
  const spanRef = useRef<HTMLSpanElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const [errorCounter, setErrorCounter] = useState(0)
	const [openHelper, setOpenHelper] = useState(false)
	const { fullPrompt, processUsed, context, content, textColor } = useShellContext()

	useEffect(() => {
    if(spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth + 2)
    }
  }, [value])

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === "Enter" && inputRef.current) {
			setCommand(inputRef.current.value)
			inputRef.current.value = ""
		}
	}

	useEffect(() => {
		if(errorCounter >= 3) {
			setOpenHelper(true)
		} else {
			setOpenHelper(false)
		}
	}, [errorCounter])

	useEffect(() => {
		inputRef.current?.focus()
	}, [processUsed])

	useEffect(() => {
		window.addEventListener('keydown', typeSound)
    return () => window.removeEventListener('keydown', typeSound)
  }, [])

	return <main
		className={`flex flex-col w-full scanlines bg-[#1D232A] ${content.docReader.lines.length !== 0 ? "justify-between" : ""} overflow-hidden min-h-screen ${openHelper ? "cursor-default" : "cursor-none"} font-mono p-5`}
		style={{ color: textColor.current }}
		onClick={() => {
			inputRef.current?.focus()
		}}
	>
		<div className="flex flex-col leading-none whitespace-pre font-mono">
			<PowerShell
				command={{
					new: command,
					clean: () => setCommand("")
				}}
				addError={() => setErrorCounter(prev => prev >= 0 ? ++prev : -1)}
			/>
		</div>
		{!processUsed && <div className="flex w-full">
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
		</div>}
		<HelperModal open={openHelper} setErrorCounter={(n) => setErrorCounter(n)}/>
	</main>
}