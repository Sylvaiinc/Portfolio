import { useState } from "react"
import { useHoverAnimation } from "../../utils/animation"
import ThemeToggle from "../../components/themeToggle"
import monkey from "../../assets/monkey.webp"
import Icon from "../../components/icon"
import Toggle from "../../components/toggle"
import { SkillsComponent, type Skill } from "./components/comptences"
import Projects from "./components/projects"

export default function MainTheme() {
	const [ checked, setCheked] = useState(true)

	const skills: {
		[key: string]: Skill[]
	} = {
		front: [
			{ name: "HTML / CSS", level: "Expert", icon: "html" },
			{ name: "JS / TS", level: "Avancé", icon: "Js" },
			{ name: "React", level: "Avancé", icon: "react" },
			{ name: "React Native", level: "Avancé", icon: "react" },
			{ name: "Symfony", level: "Avancé", icon: "symfony" },
			{ name: "Tailwind", level: "Avancé", icon: "tailwind" },
		],
		back: [
			{ name: "Node.js", level: "Avancé", icon: "html" },
			{ name: "Python", level: "Intermédiaire", icon: "html" },
			{ name: "Symfony", level: "Avancé", icon: "symfony" },
			{ name: "PHP", level: "Avancé", icon: "html" },
		],
		bdd: [
			{ name: "MySQL", level: "Avancé", icon: "html" },
			{ name: "PostgreSQL", level: "Avancé", icon: "html" },
			{ name: "MongoDB", level: "Intermédiaire", icon: "html" },
		],
		devOps: [
			{ name: "Docker", level: "Intermédiaire", icon: "html" },
			{ name: "OVH", level: "Intermédiaire", icon: "html" },
		],
		other: [
			{ name: "Git", level: "Expert", icon: "html" },
			{ name: "Figma", level: "Intermédiaire", icon: "html" },
			{ name: "Jira", level: "Intermédiaire", icon: "html" },
			{ name: "Agile", level: "Avancé", icon: "html" },
			{ name: "V-Cycle", level: "Avancé", icon: "html" },
		]
	}

	return <>
		<header className="flex flex-col w-full max-w-4xl justify-center items-center mx-auto mt-5">
			<div className="flex w-full justify-end mr-5"><ThemeToggle/></div>
			<div className="flex w-fit self-center border-4 hover:shadow-xl/20 rounded-full border-base hover:border-info mb-5">
				<div className="m-1 rounded-full bg-gradient-to-b from-neutral dark:from-base-content hover:from-info from-5% to-base-200">
					<img {...useHoverAnimation("animate-spin")} className="w-30 p-2 z-99" src={monkey}/>
				</div>
			</div>
		</header>
		<main className="flex flex-col w-full max-w-4xl mx-auto mt-5">
			<section
				className="flex flex-col w-fit self-center justify-center cursor-default hover:text-info text-shadow-lg items-center"
				{...useHoverAnimation("animate-rotateY")}
			>
				<h1 className="text-3xl font-extrabold font-[Moirai_One]">Sylvain Cuomo</h1>
				<span>Full Stack developer</span>	
			</section>
			<section className="flex flex-row w-3/12 self-center justify-around mt-10">
				<a 
					target="_blank"
					href="https://github.com/Sylvaiinc"
					{...useHoverAnimation("animate-spin")}
					className="hover:cursor-pointer"
				>
					<Icon className="hover:fill-info" type="git" size="s"/></a>
				<a 
					target="_blank"
					href="https://www.linkedin.com/in/sylvain-cuomo-61699614a"
					{...useHoverAnimation("animate-spin")}
					className="hover:cursor-pointer"
				>
					<Icon className="hover:fill-info" type="linkedin" size="s"/></a>
				<a 
					href="mailto: sylvaincuomo@gmail.com"
					{...useHoverAnimation("animate-spin")}
					className="hover:cursor-pointer"
				>
					<Icon className="hover:fill-info" type="mail" size="s"/></a>
			</section>
			<section className="flex flex-col w-10/12 self-center items-center mt-10">
				<Toggle text={{ yes: "Compétences", no: "Projets"}} checked={checked} setChecked={(bool) => setCheked(bool)}/>
			</section>
			{checked && <section className="flex flex-row">
			<div className="flex flex-col w-full">
				<div className="flex flex-wrap justify-around">
					<div className="flex w-full sm:w-5/12 mt-10 p-2 card bg-base-200 shadow-sm">
						<SkillsComponent title="Frontend Développeur" elem={skills.front}/>
					</div>
					<div className="flex w-full sm:w-5/12 mt-10 p-2 card bg-base-200 shadow-sm">
						<SkillsComponent title="Backend Développeur" elem={skills.back}/>
					</div>
				</div>
				<div className="flex flex-wrap justify-around">
					<div className="flex w-full sm:w-5/12 mt-10 p-2 card bg-base-200 shadow-sm">
						<SkillsComponent title="Base de données" elem={skills.bdd}/>
					</div>
					<div className="flex w-full sm:w-5/12 mt-10 p-2 card bg-base-200 shadow-sm">
						<SkillsComponent title="Dev Ops" elem={skills.devOps}/>
					</div>
				</div>
				<div className="flex flex-wrap justify-around">
					<div className="flex w-full sm:w-5/12 mt-10 p-2 card bg-base-200 shadow-sm">
						<SkillsComponent title="Outils / Méthodologies" elem={skills.other}/>
					</div>
				</div>
			</div>
			</section>}
			{!checked && <section className="flex flex-col w-10/12 self-center items-center mt-10">
				<Projects/>
			</section>}
			<footer className="flex w-full justify-center my-10">
					<span className="font-semibold text-base-300">
							&#169; Sylvain Cuomo. All rigths reserved
					</span>
			</footer>
		</main>
	</>






	return <>
		<body>
				{/* <!--=============== MAIN ===============--> */}
				<main className="main">
						<section className="filters container">
								{/* <!--=============== FILTERS TABS ===============--> */}
								<ul className="filters__content">
										<button className="filters__button filter-tab-active" data-target="#projects">
												Projects
										</button>
										<button className="filters__button" data-target="#skills">
												Skills
										</button>
								</ul>
								<div className="filters__sections">
										{/* <!--=============== PROJECTS ===============--> */}
										<div className="projects__content grid filters__active" data-content id="projects">
												<article className="projects__card">
														{/* <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) --> */}
														<img src="assets/img/project1.webp" alt="" className="projects__img"/>
														<div className="projects__modal">
																<div>
																		<span className="projects__subtitle">Web</span>
																		<h3 className="projects__title">Payment Site</h3>
																		<a href="#" className="projects__button button button__small">
																				<i className="ri-link"></i>
																		</a>
																		<i className="ri-html5-fill"></i>
																		<i className="ri-css3-line"></i>
																</div>
														</div>
												</article>
												<article className="projects__card">
														<img src="assets/img/project2.webp" alt="" className="projects__img"/>
														<div className="projects__modal">
																<div>
																		<span className="projects__subtitle">Web</span>
																		<h3 className="projects__title">Portfolio website</h3>
																		<a href="#" className="projects__button button button__small">
																				<i className="ri-link"></i>
																		</a>
																</div>
														</div>
												</article>
												<article className="projects__card">
														<img src="assets/img/project3.webp" alt="" className="projects__img"/>
														<div className="projects__modal">
																<div>
																		<span className="projects__subtitle">web</span>
																		<h3 className="projects__title">Fast food app</h3>
																		<a href="#" className="projects__button button button__small">
																				<i className="ri-link"></i>
																		</a>
																</div>
														</div>
												</article>
												<article className="projects__card">
														<img src="assets/img/project4.webp" alt="" className="projects__img"/>
														<div className="projects__modal">
																<div>
																		<span className="projects__subtitle">Movil</span>
																		<h3 className="projects__title">Travel app</h3>
																		<a href="#" className="projects__button button button__small">
																				<i className="ri-link"></i>
																		</a>
																</div>
														</div>
												</article>
												<article className="projects__card">
														<img src="assets/img/project5.webp" alt="" className="projects__img"/>
														<div className="projects__modal">
																<div>
																		<span className="projects__subtitle">Design</span>
																		<h3 className="projects__title">Music app design</h3>
																		<a href="#" className="projects__button button button__small">
																				<i className="ri-link"></i>
																		</a>
																</div>
														</div>
												</article>
										</div>
										{/* <!--=============== SKILLS ===============--> */}
										<div className="skills__content grid" data-content id="skills">
												<div className="skills__area">
														<h3 className="skills__title">Frontend Developer</h3>
														<div className="skills__box">
																<div className="skills__group">
																		<div className="skills__data">
																				<i className="ri-html5-fill"></i>
																				<div>
																						<h3 className="skills__name">HTML</h3>
																						<span className="skills__level">Advanced</span>
																				</div>
																		</div>
																		<div className="skills__data">
																				<i className="ri-css3-line"></i>
																				<div>
																						<h3 className="skills__name">CSS</h3>
																						<span className="skills__level">Advanced</span>
																				</div>
																		</div>
																		<div className="skills__data">
																				<i className="ri-npmjs-fill"></i>
																				<div>
																						<h3 className="skills__name">npm</h3>
																						<span className="skills__level">basic</span>
																				</div>
																		</div>
																</div>
																<div className="skills__group">
																		<div className="skills__data">
																				<i className="ri-reactjs-line"></i>
																				<div>
																						<h3 className="skills__name">React</h3>
																						<span className="skills__level">Intermediate</span>
																				</div>
																		</div>
																		<div className="skills__data">
																				<i className="ri-gatsby-line"></i>
																				<div>
																						<h3 className="skills__name">Gatsby</h3>
																						<span className="skills__level">basic</span>
																				</div>
																		</div>
																		<div className="skills__data">
																				<i className="ri-flutter-fill"></i>
																				<div>
																						<h3 className="skills__name">Flutter</h3>
																						<span className="skills__level">Intermediate</span>
																				</div>
																		</div>
																</div>
														</div>
												</div>
												<div className="skills__area">
														<h3 className="skills__title">Backend Developer</h3>
														<div className="skills__box">
																<div className="skills__group">
																		<div className="skills__data">
																				<i className="ri-braces-fill"></i>
																				<div>
																						<h3 className="skills__name">.NET</h3>
																						<span className="skills__level">Advanced</span>
																				</div>
																		</div>
																		<div className="skills__data">
																				<i className="ri-database-2-line"></i>
																				<div>
																						<h3 className="skills__name">SQL</h3>
																						<span className="skills__level">Intermediate</span>
																				</div>
																		</div>
																		<div className="skills__data">
																				<i className="ri-fire-line"></i>
																				<div>
																						<h3 className="skills__name">Firebase</h3>
																						<span className="skills__level">Intermediate</span>
																				</div>
																		</div>
																</div>
																<div className="skills__group">
																		<div className="skills__data">
																				<i className="ri-window-2-line"></i>
																				<div>
																						<h3 className="skills__name">Windev</h3>
																						<span className="skills__level">Advanced</span>
																				</div>
																		</div>
																		<div className="skills__data">
																				<i className="ri-settings-fill"></i>
																				<div>
																						<h3 className="skills__name">Node Js</h3>
																						<span className="skills__level">Intermediate</span>
																				</div>
																		</div>
																		<div className="skills__data">
																				<i className="ri-leaf-line"></i>
																				<div>
																						<h3 className="skills__name">MongoDB</h3>
																						<span className="skills__level">Intermediate</span>
																				</div>
																		</div>
																</div>
														</div>
												</div>
										</div>
								</div>
						</section>
				</main>

				{/* <!--=============== SCROLLREVEAL ===============--{">"} */}
				<script src="assets/js/scrollreveal.min.js"></script>
				{/* <!--=============== MAIN JS ===============--> */}
				<script src="assets/js/main.js"></script>
		</body>
	</>

}