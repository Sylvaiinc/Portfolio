import type { IconProps } from "@components/icon"
import Icon from "@components/icon"

export type Skill = { name: string, level: string, icon: IconProps["type"] }

type CompétencesProps = {
	title: string
	elem: Skill[]
}

function formatArray<T>(array: T[]): T[][] {
	let count = 0
	const newArray: T[][] = []

	array.map((value, index) => {
		if(!newArray[count]) newArray[count] = []
		newArray[count].push(value)
		if(index % 2) count++
	})

	return newArray
}

export function SkillsComponent({ title, elem }: CompétencesProps) {
	return <div className="flex w-full sm:w-5/12 mt-10 p-2 card bg-base-200 shadow-sm">
		<div className="flex flex-col w-full items-center">
			<h2 className="flex self-center font-bold mb-2">{title}</h2>
			<div className="flex flex-col">
				{(formatArray(elem)).map((skills, index, tab) => {
					const isLast = index === tab.length - 1 
					return <div key={index} className="grid grid-cols-2">
						{skills.map((skill, index) => {
							const isLastOdd = isLast && (index === skills.length - 1 && skills.length === 1)
							return <div key={skill.name} className={`flex flex-row  m-5 ${isLastOdd ? "justify-center col-start-1 col-end-3" : ""}`}>
								<div className="flex mr-2">
									<Icon size="xs" type={skill.icon as IconProps["type"]}/>
								</div>
								<div className="flex flex-col col-span-1">
									<span className="leading-none font-semibold">{skill.name}</span>
									<span>{skill.level}</span>
								</div>
							</div>
						})}
				</div>
				})}
			</div>
		</div>
	</div>
}