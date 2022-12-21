import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import styles from '../PageTransition/PageTransition.module.css'

interface TransitionProps {
	children: React.ReactNode
}

const variants = {
	center: {
		clipPath: 'inset(50% round 50%)',
		transition: {
			duration: 0.6,
			ease: [0.83, 0.67, 0.67, 0.17],
		},
	},
	filled: {
		clipPath: 'inset(0% round 0%)',
		transition: {
			duration: 0.55,
			ease: 'circOut',
		},
	},
}

const PageTransition = ({ children }: TransitionProps) => {
	const router = useRouter()

	return (
		<div className={styles.transition_container}>
			<AnimatePresence initial={false} mode='wait'>
				<motion.div
					key={router.pathname}
					variants={variants}
					initial='center'
					animate='filled'
					exit='center'
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default PageTransition
