import key1 from "../../asset/key1.mp3"
import key2 from "../../asset/key2.mp3"
import key3 from "../../asset/key3.mp3"
import key4 from "../../asset/key4.mp3"

const keys = [
	new Audio(key1),
	new Audio(key2),
	new Audio(key3),
	new Audio(key4)
]

export function typeSound() {
	let i = Math.floor(Math.random() * keys.length)
	keys[i].currentTime = 0
	keys[i].play()
}
