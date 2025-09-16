type ToggleProp = {
	label: {
		y: string,
		i: string
		n: string
	}
	value: TreeToggleValues
	setValue: (v: TreeToggleValues) => void
}

export type TreeToggleValues = "y" | "i" | "n"

export default function TreeToggle (props: ToggleProp) {
	return <div className={`relative flex w-fit items-center justify-between p-2 rounded-md ${props.value === "i" ? "bg-base-300" : "bg-base-content"} peer-checked/switch-y:bg-info`}>
			{/* Option Y */}
			<input id="switch-y" type="radio" name="switch" value="y" checked={props.value === "y"} onChange={() => props.setValue("y")} className="peer/switch-y hidden"/>
			{/* Option I */}
			<input id="switch-i" type="radio" name="switch" value="i" checked={props.value === "i"} onChange={() => props.setValue("i")} className="peer/switch-i hidden"/>
			{/* Option N */}
			<input id="switch-n" type="radio" name="switch" value="n" checked={props.value === "n"} onChange={() => props.setValue("n")} className="peer/switch-n hidden"/>

			<label htmlFor="switch-y" className="cursor-pointer z-2 px-4 py-2 w-36 text-center transition-colors ease-out duration-15 font-bold text-base-content peer-checked/switch-n:text-base-100">{props.label.y}</label>
			<label htmlFor="switch-i" className="cursor-pointer z-2 px-4 py-2 w-36 text-cente transition-colors ease-out duration-150 text-base-100 font-bold">{props.label.i}</label>
			<label htmlFor="switch-n" className="cursor-pointer z-2 px-4 py-2 w-36 text-center font-bold transition-colors ease-out duration-150 text-base-content peer-checked/switch-y:text-base-100">{props.label.n}</label>

			{/* Selector (slider) */}
			<div
				className={`
					absolute w-1/3 h-10/12 rounded-sm transition-all duration-150 ease-out
					${props.value === "y" ? "translate-x-[0%] bg-base-300 left-2" : ""}
					${props.value === "i" ? "translate-x-[100%] bg-base-content left-1" : ""}
					${props.value === "n" ? "translate-x-[200%] bg-base-300 -left-2" : ""}
				`}
			/>
		</div>
}
