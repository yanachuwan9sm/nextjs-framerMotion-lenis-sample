import Link from 'next/link'

import styles from '../Layout/Layout.module.css'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return <div className={styles.container}>{children}</div>
}

export default Layout
