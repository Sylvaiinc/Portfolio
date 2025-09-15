import { key1, key2, key3, key4 } from "../../assets/sounds/index"

const sounds = [
	new Audio(key1),
	new Audio(key2),
	new Audio(key3),
	new Audio(key4)
]

export function typeSound() {
	const sound = sounds[Math.floor(Math.random() * sounds.length)]
	sound.currentTime = 0
	sound.play()
}
