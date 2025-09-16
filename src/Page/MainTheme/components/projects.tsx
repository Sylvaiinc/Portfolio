import { useRef, useState, type JSX } from "react"
import t2yLogo from "@assets/logo_truck2you.png"
import { t2yCaputre1, t2yCaputre2, t2yCaputre3, t2yCaputre4, t2yCaputre5 } from "@assets/truck2you"
import { NavLink } from "react-router-dom"

export default function Projects() {	
	const slides = [t2yCaputre1, t2yCaputre2, t2yCaputre3, t2yCaputre4, t2yCaputre5]
	const modal = useRef<HTMLDialogElement>(null)
	const [open, setOpen] = useState(false)
	return <div className="flex flex-wrap w-11/12 md:w-full justify-center md:justify-between">
		<dialog ref={modal} id="project_modal" open={open} className="modal w-full">
			<div className="modal-box w-full min-w-[95vh]">
				<div className="carousel w-full">
					{slides.map((img, i) => (
						<CarouselElement
							key={i}
							current={`slide${i}`}
							img={img}
							prev={`#slide${i === 0 ? slides.length - 1 : i - 1}`}
							next={`#slide${i === slides.length - 1 ? 0 : i + 1}`}
						/>
					))}
				</div>
				<div className="modal-action">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn" onClick={() => setOpen(false)}>Close</button>
					</form>
				</div>
			</div>
		</dialog>
		<div className="card bg-base-100 w-96 shadow-sm dark:border-1">
			<figure className="bg-sky-950">
				<img src={t2yLogo}/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">Truck2You</h2>
				<p>Site de location de transport B2B</p>
				<div className="card-actions justify-end">
					<button className="btn" onClick={()=> setOpen(true)}>Voir</button>
				</div>
			</div>
		</div>
		<div className="card mt-5 md:p-0 bg-base-100 w-96 shadow-sm dark:border-1">
			<figure className="bg-sky-950">
				<div className="flex flex-col leading-4 text-nowrap text-xs font-mono whitespace-pre text-green-500">
					<span>{"    ____             __  ____      ___     "}</span>
					<span>{"   / __ \\____  _____/ /_/ __/___  / (_)___ "}</span>
					<span>{"  / /_/ / __ \\/ ___/ __/ /_/ __ \\/ / / __ \\"}</span>
					<span>{" / ____/ /_/ / /  / /_/ __/ /_/ / / / /_/ /"}</span>
					<span>{"/_/    \\____/_/   \\__/_/  \\____/_/_/\\____/ "}</span>
				</div>
			</figure>
			<div className="card-body">
				<h2 className="card-title">Shell Portfolio</h2>
				<p>Theme de démonstration</p>
				<div className="card-actions justify-end">
					<NavLink className="btn" to="/1">Voir</NavLink>
				</div>
			</div>
		</div>
	</div>
}

interface CarouselElementProps {
	current: string
	img: string
	prev: string
	next: string
}

function CarouselElement({ current, img, prev, next }: CarouselElementProps ): JSX.Element {
	return <div id={current} className="carousel-item relative w-full">
		<img src={img} className="w-full"/>
		<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
			<a href={prev} aria-label="Slide précédente" className="btn btn-circle">❮</a>
			<a href={next} aria-label="Slide suivante" className="btn btn-circle">❯</a>
		</div>
	</div>
}