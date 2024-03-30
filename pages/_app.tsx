import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<meta httpEquiv='content-language' content='pl' />
				<title>GymBro</title>
				<link rel='canonical' href='https://gymbro-silk.vercel.app/' />
				<meta property='og:title' content='GymBro' />
				<meta property='og:url' content='https://gymbro-silk.vercel.app/' />
				<meta
					name='description'
					content="Transform your fitness journey with our state-of-the-art gym facilities and expert trainers. Whether you're a beginner or an experienced athlete, our diverse range of equipment, personalized training programs, and motivating classes will help you achieve your health and fitness goals. Join our community today and start your path to a stronger, healthier you."
				/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
