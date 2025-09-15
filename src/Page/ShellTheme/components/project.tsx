import type { JSX } from "react"
import { t2yCaputre1, t2yCaputre2, t2yCaputre3, t2yCaputre4, t2yCaputre5 } from "../../../assets/truck2you/index"

interface ProjectProps {
	isOpen: boolean
	close: () => void
}
export default function project({ isOpen, close }: ProjectProps) {
	const slides = [t2yCaputre1, t2yCaputre2, t2yCaputre3, t2yCaputre4, t2yCaputre5]

	return <dialog open={isOpen} className="modal w-full">
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
					<button className="btn" onClick={() => close()}>Close</button>
				</form>
			</div>
		</div>
	</dialog>
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