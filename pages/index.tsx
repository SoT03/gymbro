import Header from '@/components/Header';
import Welcome from '@/components/Welcome';
import Layout from '@/components/layout/Layout';

const HomePage = () => {
	return (
		<Layout>
			<Header />
			<main>
				<Welcome />
			</main>
		</Layout>
	);
};

export default HomePage;
