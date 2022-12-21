import { useScroll } from 'framer-motion'

import { useRef } from 'react'

import styles from '../styles/Home.module.css'

import HeroCard from '../components/HeroCard'
import AboutCard from '../components/AboutCard'
import Recruit from '../components/Recruit'
import Hero from '../components/Hero'

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
