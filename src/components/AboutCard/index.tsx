import { motion, MotionValue, useTransform } from 'framer-motion'
import React, { FC } from 'react'

import styles from '../AboutCard/index.module.css'
import NextImage from '../NextImage'
import NextImageWrapper from '../NextImageWrapper'

type AboutCardProps = {
	scrollYProgress: MotionValue<number>
	src: string
}

const AboutCard: FC<AboutCardProps> = ({ scrollYProgress, src }) => {
	const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100])
	const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])

	return (
		<div className={styles.container}>
			<NextImageWrapper>
				<motion.div className={styles.parallax_container} style={{ y: y1 }}>
					<motion.div className={styles.parallax_container} style={{ y: y2 }}>
						<NextImage src={src} alt='' />
					</motion.div>
				</motion.div>
			</NextImageWrapper>
		</div>
	)
}

export default AboutCard
