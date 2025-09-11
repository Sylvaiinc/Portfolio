import { useState, type JSX } from "react"
import t2yLogo from "../../../assets/logo_truck2you.png"
import t2yCaputre1 from "../../../assets/truck2you/1.png"
import t2yCaputre2 from "../../../assets/truck2you/2.png"
import t2yCaputre3 from "../../../assets/truck2you/3.png"
import t2yCaputre4 from "../../../assets/truck2you/4.png"
import t2yCaputre5 from "../../../assets/truck2you/5.png"

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

export default function Projects() {	
	const slides = [t2yCaputre1, t2yCaputre2, t2yCaputre3, t2yCaputre4, t2yCaputre5]

	const [open, setOpen] = useState(false)
	return <div className="flex w-full justify-center">
		<dialog id="project_modal" open={open} className="modal w-full">
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
		<div className="card bg-base-100 w-96 shadow-sm">
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
	</div>
}
