import { useEffect, useRef, useState } from "react";
import Icon from "../../components/icon";

export default function ShellTheme() {
	const text = "user@webSite: ~$"
	const [displayedText, setDisplayedText] = useState("")
  const [value, setValue] = useState("");
  const spanRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(1); // largeur min 1px

  useEffect(() => {

    if (spanRef.current) {
      const newWidth = spanRef.current.offsetWidth + 2; // petit padding
      setWidth(newWidth < 1 ? 1 : newWidth);
    }
  }, [value]);

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			setDisplayedText((prev) => prev + text[i]);
			i++;
			if (i >= text.length) clearInterval(interval);
		}, 100); // vitesse d’écriture (100ms par caractère)
		return () => clearInterval(interval);
	}, []);

	return (
		<main className="flex flex-col w-full min-h-screen text-green-400 font-mono">
			<section className="m-5">
				<span>{displayedText}</span>
				<span className="animate-ping"></span> {/* curseur qui clignote */}
			</section>
			<section className="flex w-full">
				<Icon type="square"/>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					style={{ width: `${width}px` }}
					className="border border-gray-400 focus:outline-none"
				/>

				{/* élément invisible servant à mesurer le texte */}
				<span
					ref={spanRef}
					className="absolute invisible whitespace-pre font-mono text-base"
				>
					{value || ""}
				</span>
			</section>
		</main>
	);


	return <main className="flex flex-col p-5">
		<section className="flex">
			<span>user@webSite: ~$</span>
		</section>
		<section className="flex">
			<div>
				<span>user@webSite: ~$</span>
				<input type="text"/>
				<span className="animate-ping">|</span>
			</div>
		</section>
	</main>
}