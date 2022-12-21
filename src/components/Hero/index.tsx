import { useScroll } from 'framer-motion'
import React, { useRef } from 'react'

import styles from '../Hero/index.module.css'
import HeroCard from '../HeroCard'

const Hero = () => {
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	return (
		<section className={styles.section} ref={ref}>
			<div className={styles.top}>
				<h2 className={styles.headline}>2023&apos;s<br />Next Eto.....?
				</h2>
			</div>
			<div className={styles.bottom}>
				<HeroCard scrollYProgress={scrollYProgress} />
			</div>
		</section>
	)
}

export default Hero
