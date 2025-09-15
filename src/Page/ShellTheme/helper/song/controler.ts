import key1 from "../../asset/key1.mp3"
import key2 from "../../asset/key2.mp3"
import key3 from "../../asset/key3.mp3"
import key4 from "../../asset/key4.mp3"

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
