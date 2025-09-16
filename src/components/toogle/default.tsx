
type ToggleProp = {
	label: {
		yes: string,
		no: string
	}
	checked: boolean
	setChecked: (bool: boolean) => void
}
export default function Toggle (props: ToggleProp) {
	let className = {
		main: "w-70 h-15"
	}

	return <div className={`relative group ${className.main}`}>
		<input type="checkbox" id="toggle" className="hidden" onChange={() => props.setChecked(!props.checked)}/>
		<div className="absolute inset-0 rounded-md bg-base-content transition-colors duration-300 group-has-checked:bg-base-300"></div>
		<div className="absolute flex inset-0 items-center px-1">
			<div className="absolute flex items-center justify-center font-bold w-35 h-12 px-2 py-1 rounded-sm bg-base-300 group-has-checked:bg-base-content transition-transform duration-200 ease-in-out group-has-checked:translate-x-33">
				<span className="text-base-content transition-opacity duration-300 opacity-100 group-has-checked:opacity-0 group-has-checked:hidden">{props.label.yes}</span>
				<span className="text-base-300 transition-opacity duration-300 opacity-0 group-has-checked:opacity-100 hidden group-has-checked:block">{props.label.no}</span>
			</div>
			<div className="flex w-full justify-between items-center h-12 px-2 py-1">
				<div className="flex w-1/2 items-center "><span className="font-bold group-has-checked:text-base-content transition-opacity duration-300 opacity-0 group-has-checked:opacity-100">{props.label.yes}</span></div>
				<div className="flex w-1/2 justify-center items-center "><span className="font-bold text-base-300 transition-opacity duration-300 opacity-100 group-has-checked:opacity-0">{props.label.no}</span></div>
			</div>
		</div>
		<label htmlFor="toggle" className="absolute inset-0 cursor-pointer"></label>
	</div>
}