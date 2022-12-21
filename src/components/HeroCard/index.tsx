import { FC } from 'react'
import { motion, MotionValue, useTransform } from 'framer-motion'
import NextImage from '../NextImage'
import styles from '../HeroCard/index.module.css'
import Parallax from '../Parallax'
import NextImageWrapper from '../NextImageWrapper'

type HeroCardProps = {
	scrollYProgress: MotionValue<number>
}

const HeroCard: FC<HeroCardProps> = ({ scrollYProgress }) => {
	const deg = useTransform(scrollYProgress, [0.2, 0.6], [20, 0])

	return (
		<div className={styles.bottom_container}>
			<NextImageWrapper style={{ perspective: '1200px' }}>
				<motion.div
					className={styles.parallax_container}
					style={{
						rotateX: deg,
						borderRadius: '20px',
					}}
				>
					<Parallax
						scrollYProgress={scrollYProgress}
						type='scale'
						viewportRange={[0.2, 0.6]}
						offsetRange={[1.5, 1]}
					>
						<NextImage src='/eto.jpg' alt='' />
					</Parallax>
				</motion.div>
			</NextImageWrapper>
		</div>
	)
}

export default HeroCard
