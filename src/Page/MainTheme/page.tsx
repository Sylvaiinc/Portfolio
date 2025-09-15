import { useState } from "react"
import { useHoverAnimation } from "../../utils/animation"
import ThemeToggle from "../../components/themeToggle"
import monkey from "./assets/monkey.webp"
import Icon, { type IconProps } from "../../components/icon"
import Toggle from "../../components/toggle"
import { SkillsComponent, type Skill } from "./components/competences"
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

	const externalSite: { link: string, type: IconProps["type"] }[] = [
		{ link: "https://github.com/Sylvaiinc", type: "git" },
		{ link: "https://www.linkedin.com/in/sylvain-cuomo-61699614a", type: "linkedin" },
		{ link: "mailto: sylvaincuomo@gmail.com", type: "mail" }
	]

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
				{externalSite.map((elem, index) => <a
					key={index}
					target="_blank"
					href={elem.link}
					{...useHoverAnimation("animate-spin")}
					className="hover:cursor-pointer"
				>
					<Icon className="hover:fill-info" type={elem.type} size="s"/>
				</a>)}
			</section>
			<section className="flex flex-col w-10/12 self-center items-center mt-10">
				<Toggle text={{ yes: "Compétences", no: "Projets"}} checked={checked} setChecked={(bool) => setCheked(bool)}/>
			</section>
			{checked && <section className="flex flex-row">
				<div className="flex flex-col w-full">
					<div className="flex flex-wrap justify-around">
						<SkillsComponent title="Frontend Développeur" elem={skills.front}/>
						<SkillsComponent title="Backend Développeur" elem={skills.back}/>
					</div>
					<div className="flex flex-wrap justify-around">
						<SkillsComponent title="Base de données" elem={skills.bdd}/>
						<SkillsComponent title="Dev Ops" elem={skills.devOps}/>
					</div>
					<div className="flex flex-wrap justify-around">
						<SkillsComponent title="Outils / Méthodologies" elem={skills.other}/>
					</div>
				</div>
			</section>}
			{!checked && <section className="flex flex-col w-full self-center items-center mt-10">
				<Projects/>
			</section>}
			<footer className="flex w-full justify-center my-10">
					<span className="font-semibold text-base-300">
							&#169; Sylvain Cuomo. All rigths reserved
					</span>
			</footer>
		</main>
	</>
}