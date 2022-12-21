import { MotionStyle } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../NextImage/index.module.css'
import { motion } from 'framer-motion'

type NextImageProps = {
	src: string
	alt: string
	style?: React.CSSProperties
}

const NextImage: FC<NextImageProps> = ({ src, alt, style }) => {
	return (
		<Image
			src={src}
			alt={alt}
			fill
			className={styles.image}
			style={{ ...style }}
		/>
	)
}

export default NextImage
