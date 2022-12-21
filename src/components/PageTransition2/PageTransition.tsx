import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import styles from '../PageTransition/PageTransition.module.css'

interface TransitionProps {
	children: React.ReactNode
}

const variants = {
	scaleDown: {
		scale: 0.8,
		y: 100,
		transition: {
			duration: 0.4,
		},
	},
	out: {
		x: '-100%',
		transition: {
			duration: 0.4,
			delay: 0.5,
		},
	},
	center: {
		x: 0,
		scale: 0.8,
		transformOrigin: 'top',
		transition: {
			duration: 0.4,
		},
	},
	scaleUp: {
		scale: 1,
		y: 0,
		transition: {
			duration: 0.4,
			delay: 0.5,
		},
	},
	in: {
		scale: 0.8,
		y: 100,
		x: '100%',
		transition: {
			duration: 0.4,
		},
	},
}

const PageTransition = ({ children }: TransitionProps) => {
	const router = useRouter()

	return (
		<div className={styles.transition_container}>
			<AnimatePresence
				initial={false}
				mode='wait'
				// onExitComplete={() => window.scrollTo(0, 0)}
			>
				<motion.div
					key={router.pathname}
					variants={variants}
					initial='in'
					animate={['center', 'scaleUp']}
					exit={['scaleDown', 'out']}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default PageTransition
