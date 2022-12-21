import {
	CustomValueType,
	motion,
	MotionStyle,
	MotionValue,
	useTransform,
} from 'framer-motion'
import React, { FC } from 'react'

import styles from '../Parallax/index.module.css'

type ParallaxType =
	| string
	| number
	| MotionValue<number>
	| CustomValueType
	| MotionValue<string>
	| MotionValue<any>

export interface Parallax {
	scrollYProgress: MotionValue<number>
	viewportRange: Array<number>
	offsetRange: Array<number>
	type?: ParallaxType
}

type ParallaxProps = {
	children: React.ReactNode
} & Parallax

const Parallax: FC<ParallaxProps> = ({
	children,
	scrollYProgress,
	viewportRange,
	offsetRange,
	type,
}) => {
	const value = useTransform(scrollYProgress, viewportRange, offsetRange)
	const style = { [type as string]: value }

	return (
		<motion.div className={styles.container} style={style as MotionStyle}>
			{children}
		</motion.div>
	)
}

export default Parallax
