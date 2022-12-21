import React, { FC } from 'react'

import styles from '../NextImageWrapper/index.module.css'

type NextImageWrapperProps = {
	children: React.ReactNode
	style?: React.CSSProperties
}

const NextImageWrapper: FC<NextImageWrapperProps> = ({ children, style }) => {
	return (
		<div className={styles.container} style={{ ...style }}>
			{children}
		</div>
	)
}

export default NextImageWrapper
