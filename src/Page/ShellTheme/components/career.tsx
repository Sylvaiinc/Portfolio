import { useEffect, useState } from "react"
import type { PrintProps } from "./powerShell"

const careerStr = [
	">> EXPERIENCE PROFESSIONNELLE                                         ",
	"                                                                      ",
	"[ Truck2you ] - Responsable Technique                                 ",
	"------------------------------------------------------------          ",
	"  - Conception & structuration BDD, architecture applicative          ",
	"  - Refonte fonctionnelle complète (système d’iframes)                ",
	"  - Livraison de nouvelles features en 2 mois (appli bloquée 1 an)    ",
	"  - Maintenance & développement continu                               ",
	"  - Gestion serveurs OVH (config, sous-domaines, réseau simulé)       ",
	"  - Collaboration avec dirigeant, équipe commerciale et actionnaires  ",
	"                                                                      ",
	"  Tech: Symfony, React, React Native, TS, Python Kivy, MariaDB, Git   ",
	"                                                                      ",
	"[ Blue Forest ] - Développeur                                         ",
	"------------------------------------------------------------          ",
	"  - Conception d’un langage informatique descriptif propriétaire      ",
	"  - Développement d’applications web & mobiles (prototype → prod)     ",
	"  - Animation de réunions clients, suivi projet                       ",
	"  - Mise en place de tests (unitaires, E2E, non-régression)           ",
	"                                                                      ",
	"  Tech: React, React Native, TS, ArangoDB, Git                        ",
	"                                                                      ",
	"[ Enedis ] - Développeur Full Stack                                   ",
	"------------------------------------------------------------          ",
	"  - Outils internes en JS/PHP pour automatiser les processus métiers  ",
	"  - Maintenance et évolution continue des sites existants             ",
	"  - Refonte et modernisation des anciens outils                       ",
	"  - Définition & supervision de l’architecture projet                 ",
	"                                                                      ",
	"  Tech: JS, PHP, HTML/CSS, BDD relationnelles                         ",
	"                                                                      ",
	"[ NOVRH ] - Développeur TMA                                           ",
	"------------------------------------------------------------          ",
	"  - Résolution tickets maintenance applicative                        ",
	"  - Développement d’évolutions selon besoins métiers                  ",
	"                                                                      ",
	"  Tech: JavaJEE, JS, MariaDB, Git                                     ",
	"                                                                      ",
	"[ ACSEO ] - Développeur Web                                           ",
	"------------------------------------------------------------          ",
	"  - Maintenance & nouvelles fonctionnalités                           ",
	"  - Mise en place d’un projet Wordpress                               ",
	"  - Modification d’un thème Grav                                      ",
	"                                                                      ",
	"  Tech: Symfony, JS, Twig, Docker, Git, Grav, Wordpress               ",
	"                                                                      ",
	"[ Aix-Marseille Université ] - Stage Freelance                        ",
	"------------------------------------------------------------          ",
	"  - Cahier des charges avec le client                                 ",
	"  - Mise en place BDD, environnement, versionning                     ",
	"  - Développement & tests du site                                     ",
	"  - Formation des professeurs                                         ",
	"                                                                      ",
	"  Tech: Symfony 2.7, Twig, PHP, JS, CSS, Git, GitLab, Trello          ",
	"                                                                      ",
	"   ----------------------------------------------------------------   ",
	">> EXPERIENCE FORMATION                                               ",
	"                                                                      ",
	"[ INSITUT G4 ] - Chef de projet Systeme d'inforamtion                 ",
	"[ UIT AIX MARSEILLE ] - DUT INFORMATIQUE                              "
]

export interface CareerProps {
	print: (cmd: PrintProps["cmd"]) => Promise<void>
	close: () => void
}
export default  function Career({print, close}: CareerProps) {
	const [readerIndex, setReaderIndex] = useState(0)
	const [printing, setPrinting] = useState(false)
	const INCREMENT = 5
	useEffect(() => {
		const generateAction = (e: KeyboardEvent) => {
			if(printing) return
			if(e.key === "Escape") {
				close()
			} else if(readerIndex === 0) {
				setReaderIndex(prev => prev + INCREMENT)
			} else {
				setReaderIndex(prev => prev + (INCREMENT * 2))
			}
		}

		window.addEventListener('keydown', generateAction)
		return () => window.removeEventListener('keydown', generateAction)
	})

	useEffect(() => {
		const handlePrint = async () => {
			if(readerIndex === 0) return
			setPrinting(true)
			for(let i = readerIndex - INCREMENT; i < readerIndex + INCREMENT; i++) {
				await print(careerStr[i])
			}						
			setPrinting(false)
		}
		handlePrint()
	}, [readerIndex])

	return <>
		<br/>
		<br/>
		{!printing && <div className="flex flex-col items-center self-center">
			<span>Appuyer sur n'importe qu'elle touche pour afficher la suite</span>
			<span>echape pour quitter</span>
		</div>}
	</>
}