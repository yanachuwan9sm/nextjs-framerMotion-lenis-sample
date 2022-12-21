import Link from 'next/link'
import React from 'react'

import styles from '../Header/Header.module.css'
const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header_wrap}>
				<h1 className={styles.header_headline}>😎framer motion + Next.js</h1>
				<nav className={styles.nav}>
					<Link href='/' scroll={false} legacyBehavior>
						<a className={styles.button}>Home</a>
					</Link>
					<Link href='/about' scroll={false} legacyBehavior>
						<a className={styles.button}>about</a>
					</Link>
					<Link href='/contact' scroll={false} legacyBehavior>
						<a className={styles.button}>contact</a>
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
