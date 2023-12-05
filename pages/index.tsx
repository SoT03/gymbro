import Header from '@/components/Header';
import Offer from '@/components/Pricing';
import Opinions from '@/components/Opinions';
import Welcome from '@/components/Welcome';
import Layout from '@/components/layout/Layout';
import Pricing from '@/components/Pricing';

const HomePage = () => {
	return (
		<Layout>
			<Header />
			<main>
				<Welcome />
				<Opinions />
				<Pricing />
			</main>
		</Layout>
	);
};

export default HomePage;
