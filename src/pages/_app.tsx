import '../styles/globals.css'
import Head from 'next/head'


import Header from '../components/Header'
import Layout from '../components/Layout/Layout'
import PageTransition from '../components/PageTransition'
import useSmoothScroll from '../hooks/use-smooth-scroll'
import styles from '../styles/Home.module.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	useSmoothScroll()
	return (
		<>
			<Head>
				<title>framer-example</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.container}>
				<Header />
				<PageTransition>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</PageTransition>
			</div>
		</>
	)
}
