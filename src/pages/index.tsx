import { useScroll } from 'framer-motion'
import { useRef } from 'react'


import AboutCard from '../components/AboutCard'
import Hero from '../components/Hero'
import HeroCard from '../components/HeroCard'
import Recruit from '../components/Recruit'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<Hero />
				<Recruit />
			</main>
		</>
	)
}
