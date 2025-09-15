import { useNavigate } from "react-router-dom"

export function HelperModal({ open, setErrorCounter }: { open: boolean, setErrorCounter: (n: number) => void }) {
	const navigate = useNavigate()
	return <dialog open={open} className="modal font-mono w-full">
		<div className="flex flex-col p-0 leading-none min-w-fit text-nowrap overflow-hidden bg-[#1D232A]">
			<span>+---------------------------------------------------+</span>
			<span className="whitespace-pre">|     Vous semblez rencontrez des difficultés       |</span>
			<span className="whitespace-pre">|           (cliquez sur votre choix)               |</span>
			<span className="whitespace-pre">|                                                   |</span>
			<span className="whitespace-pre">|                                                   |</span>
			<div className="flex whitespace-pre">
				<span className="whitespace-pre">|          </span>
				<button className="focus:outline-none underline cursor-pointer" onClick={() => setErrorCounter(0)}>{"<<Rester>>"}</button>
				<span>         </span>
				<button className="focus:outline-none underline cursor-pointer" onClick={() => navigate("/")}>{"<<Quitter>>"}</button>
				<span>           |</span>
			</div>
			<span className="whitespace-pre">|                                                   |</span>
			<div className="flex whitespace-pre">
				<span className="whitespace-pre">|          </span>
				<button className="focus:outline-none underline cursor-pointer" onClick={() => setErrorCounter(-1)}>{"<<Rester et ne plus demander>>"}</button>
				<span>           |</span>
			</div>
			<span>+---------------------------------------------------+</span>
		</div>
	</dialog>
}