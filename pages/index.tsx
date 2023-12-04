import Header from '@/components/Header';
import Offer from '@/components/Offer';
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
				<Offer />
			</main>
		</Layout>
	);
};

export default HomePage;
