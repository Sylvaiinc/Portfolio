
export type AnimationHandlers = {
	onMouseEnter: (e: React.MouseEvent<HTMLElement>) => void
	onMouseLeave: (e: React.MouseEvent<HTMLElement>) => void
}

export function useHoverAnimation(animationClass: string): AnimationHandlers {
	const onMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
		e.currentTarget.classList.add(animationClass)
	}

	const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
		const el = e.currentTarget
		el.addEventListener(
		"animationiteration",
		() => {
			el.classList.remove(animationClass)
		},
		{ once: true }
		)
	}

	return { onMouseEnter, onMouseLeave }
}
