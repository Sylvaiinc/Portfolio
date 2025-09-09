import t2yLogo from "../../../assets/logo_truck2you.png"
import t2yCaputre1 from "../../../assets/truck2you/1.png"
import t2yCaputre2 from "../../../assets/truck2you/2.png"
import t2yCaputre3 from "../../../assets/truck2you/3.png"
import t2yCaputre4 from "../../../assets/truck2you/4.png"
import t2yCaputre5 from "../../../assets/truck2you/5.png"

export default function Projects() {	
	return <div className="flex w-full justify-center">
		<dialog id="project_modal" className="modal w-full">
			<div className="modal-box w-full min-w-[95vh]">
				<div className="carousel w-full">
					<div id="slide1" className="carousel-item relative w-full">
						<img src={t2yCaputre1} className="w-full"/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a href="#slide5" className="btn btn-circle">❮</a>
							<a href="#slide2" className="btn btn-circle">❯</a>
						</div>
					</div>
					<div id="slide2" className="carousel-item relative w-full">
						<img src={t2yCaputre2} className="w-full"/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a href="#slide1" className="btn btn-circle">❮</a>
							<a href="#slide3" className="btn btn-circle">❯</a>
						</div>
					</div>
					<div id="slide3" className="carousel-item relative w-full">
						<img src={t2yCaputre3} className="w-full"/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a href="#slide2" className="btn btn-circle">❮</a>
							<a href="#slide4" className="btn btn-circle">❯</a>
						</div>
					</div>
					<div id="slide4" className="carousel-item relative w-full">
						<img src={t2yCaputre4} className="w-full"/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a href="#slide3" className="btn btn-circle">❮</a>
							<a href="#slide1" className="btn btn-circle">❯</a>
						</div>
					</div>
					<div id="slide5" className="carousel-item relative w-full">
						<img src={t2yCaputre5} className="w-full"/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a href="#slide4" className="btn btn-circle">❮</a>
							<a href="#slide1" className="btn btn-circle">❯</a>
						</div>
					</div>
				</div>
				<div className="modal-action">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn">Close</button>
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
					<button className="btn" onClick={()=>(document.getElementById('project_modal') as HTMLDialogElement | null)?.showModal()}>Voir</button>
				</div>
			</div>
		</div>
	</div>
}
