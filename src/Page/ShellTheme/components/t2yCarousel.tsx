import { useEffect, useRef, useState, type JSX } from "react"
import { t2yCaputre1, t2yCaputre2, t2yCaputre3, t2yCaputre4, t2yCaputre5 } from "../../../assets/truck2you/index"

export default function T2YCarousel({ isOpen, close }: ProjectProps) {
	const slides = [t2yCaputre1, t2yCaputre2, t2yCaputre3, t2yCaputre4, t2yCaputre5]
	const modal = useRef<HTMLDialogElement>(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	return <dialog
		ref={modal}
		open={isOpen}
		className="modal w-full focus:outline-none"
		onClick={() => modal.current?.focus()}
	>
		<div className="modal-box w-full min-w-[96vh]">
			<div className="flex carousel">
				{slides.map((img, i) => (
					<CarouselElement
						key={i}
						changeCurrent={{
							prev: () => {
								setCurrentIndex(i === 0 ? slides.length -1 : i - 1)
							},
							next: () => {
								setCurrentIndex(i === slides.length - 1 ? 0 : i + 1)
							}
						}}
						close={close}
						current={i}
						active={isOpen && i === currentIndex}
						img={img}
						prev={`#slide${i === 0 ? slides.length -1 : i - 1}`}
						next={`#slide${i === slides.length - 1 ? 0 : i + 1}`}
					/>
				))}
			</div>
			<span className="flex justify-center whitespace-pre mt-2">{
				"<<fleche gauche ou l      (q)exit    fleche droite ou r>>"
			}</span>
		</div>
	</dialog>
}

interface CarouselElementProps {
	current: number
	changeCurrent: {
		prev: () => void
		next: () => void
	}
	close: () => void
	img: string
	prev: string
	next: string
	active: boolean
}
function CarouselElement({ current, img, prev, next, active, changeCurrent, close }: CarouselElementProps ): JSX.Element {
	const left = useRef<HTMLAnchorElement>(null)
	const right = useRef<HTMLAnchorElement>(null)
	
	useEffect(() => {
		const generateAction = (e: KeyboardEvent) => {
			if(e.key === "ArrowRight" || e.key === "r" || e.key === "d") {
				changeCurrent.next()
				right.current?.click()
			} else if(e.key === "ArrowLeft" || e.key === "l" || e.key === "g") {
				changeCurrent.prev()
				left.current?.click()
			} else if(e.key === "q" || e.key === "e") {
				close()
			}
		}
		if(active) {
			window.addEventListener('keydown', generateAction)
		}
		return () => window.removeEventListener('keydown', generateAction)
	})

	return <div id={`slide${current}`} className="carousel-item relative w-full">
		<span>{current}</span>
		<img src={img} className="w-full"/>
		<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
			<a ref={left} href={prev} aria-label="Slide précédente" className="hidden"/>
			<div className="flex flex-col bg-gray-800/30 rounded-2xl">
				<span className="whitespace-pre">   __ </span>
				<span className="whitespace-pre">  / / </span>
				<span className="whitespace-pre"> / /  </span>
				<span className="whitespace-pre"> \ \  </span>
				<span className="whitespace-pre">  \_\ </span>
			</div>
			<a ref={right} href={next} aria-label="Slide suivante" className="hidden"/>
			<div className="flex flex-col bg-gray-800/30 rounded-2xl">
				<span className="whitespace-pre"> __   </span>
				<span className="whitespace-pre"> \ \  </span>
				<span className="whitespace-pre">  \ \ </span>
				<span className="whitespace-pre">  / / </span>
				<span className="whitespace-pre"> /_/  </span>
			</div>
		</div>
	</div>
}

interface ProjectProps {
	isOpen: boolean
	close: () => void
}