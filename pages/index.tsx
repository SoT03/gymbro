import Header from '@/components/Header';
import Opinions from '@/components/Opinions';
import Welcome from '@/components/Welcome';
import Layout from '@/components/layout/Layout';

const HomePage = () => {
	return (
		<Layout>
			<Header />
			<main>
				<Welcome />
				<Opinions />
			</main>
		</Layout>
	);
};

export default HomePage;
