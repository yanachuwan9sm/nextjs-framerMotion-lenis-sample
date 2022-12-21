import React, {
	MutableRefObject,
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
} from 'react'

import { useTransform, useSpring, motion, useScroll } from 'framer-motion'

import styles from '../SmoothScroll/index.module.css'
import useResizeObserver from '@react-hook/resize-observer'

interface SmoothScroll {
	children: React.ReactNode
}

const usePageHeight = (target: MutableRefObject<null>) => {
	const [pageHeight, setPageHeight] = useState<number>(0)

	// useResizeObserver(target, (entry) => setPageHeight(entry.contentRect.height))

	const resizeCallback = useCallback((entries: any) => {
		for (let entry of entries) {
			setPageHeight(entry.contentRect.height)
		}
	}, [])

	useLayoutEffect(() => {
		const resizeObserver = new ResizeObserver((entries) =>
			resizeCallback(entries)
		)
		resizeObserver.observe(target.current as any)
		return () => resizeObserver.disconnect()
	}, [target])

	return pageHeight
}

const SmoothScroll = ({ children }: SmoothScroll) => {
	const scrollRef = useRef(null)

	const pageHeight = usePageHeight(scrollRef)

	const { scrollY } = useScroll()
	const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
	const physics = {
		// damping: 10, // 振動の大きさを小さくするための比率
		// stiffness: 1100, // 剛性係数 : 剛性が高いと振動数が減少する
		// mass: 0.01, // 質量
		// velocity: 1000, //初期速度
		duration: 90,
	}
	const spring = useSpring(transform, physics)

	return (
		<>
			<motion.div
				ref={scrollRef}
				style={{ y: spring }}
				className={styles.scroll_container}
			>
				{children}
			</motion.div>
			<div style={{ height: pageHeight }} />
		</>
	)
}

export default SmoothScroll
