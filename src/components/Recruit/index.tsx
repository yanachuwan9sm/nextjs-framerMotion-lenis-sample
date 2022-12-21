import { useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import AboutCard from '../AboutCard'
import styles from '../Recruit/index.module.css'

const Recruit = () => {
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	return (
		<section className={styles.section}>
			<h2 className={styles.headline}>Recruit</h2>
			<div className={styles.cardList}>
				<div className={styles.card}>
					<AboutCard src='/sample1.jpg' scrollYProgress={scrollYProgress} />
				</div>
				<div className={styles.description}>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa.
					</p>

					<p className={styles.text}>
						Cum sociis natoque penatibus et magnis dis parturient montes,
						nascetur ridiculus mus. Donec quam felis, ultricies nec,
						pellentesque eu, pretium quis, sem.
					</p>
				</div>
			</div>
			<div className={styles.cardList}>
				<div className={styles.description}>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa.
					</p>

					<p className={styles.text}>
						Cum sociis natoque penatibus et magnis dis parturient montes,
						nascetur ridiculus mus. Donec quam felis, ultricies nec,
						pellentesque eu, pretium quis, sem.
					</p>
				</div>
				<div className={styles.card}>
					<AboutCard src='/sample2.jpg' scrollYProgress={scrollYProgress} />
				</div>
			</div>
		</section>
	)
}

export default Recruit
