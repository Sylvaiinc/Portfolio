
export const genericCommand = {
	feature: [
		"En attente de la feature"
	],
	default: [
		"Commande non reconnu, tapper help ou h"
	]
}

export const mainCommand = {
	title: [
		"Mode customisation du portfolio powershell"
	],
	help: [
		"Commande principal:",
		"|   Comande   |  raccourci  |  result ",
		"---------------------------------",
		"|    clear    |       c     | vide l'écran",
		"---------------------------------",
		"| about skill |       as    | Affiche les compétences",
		"---------------------------------",
		"|   change    |       ch    | Customise le shell",
		"---------------------------------",
		"|    help     |       h     | Affiche les commandes",
		"---------------------------------",

	],
	about: [
		...genericCommand.feature
	],
}

export const customCommand = {
	title: [
		"Mode customisation du portfolio powershell"
	],
	help: [
		"Commande mode customisation:",	
		"|         Comande             |       raccourci       |  resultat ",
		"------------------------------------------------------------------",
		"|      user <newPrompt>       |      up  <newPrompt>  | Change le prompt de l'utilisateur",
		"------------------------------------------------------------------",
		"|     hostname <newPrompt>    |      hp  <newPrompt>  | Change le prompt du hostname",
		"------------------------------------------------------------------",
		"|     symbol <newPrompt>      |      sp  <newPrompt>  | Change le prompt de l'utilisateur",
		"------------------------------------------------------------------",
		"|      color <colorHexa>      |       c <colorHexa>   | Change la couleur du text",
		"------------------------------------------------------------------",
		"|            clear            |           c           | Vide l'écran",
		"------------------------------------------------------------------",
		"|            exit             |           e           | Quitte le mode custom",
		"------------------------------------------------------------------",
		"|            help             |           h           | Affiche les commandes",
		"------------------------------------------------------------------"
	],
	exit: [
		"Retour au commande principal"
	],
	prompt: [
		"Modification du prompt Ok"
	]
}
