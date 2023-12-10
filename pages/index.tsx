import Header from '@/components/Header';
import Opinions from '@/components/Opinions';
import Welcome from '@/components/Welcome';
import Layout from '@/components/layout/Layout';
import Pricing from '@/components/Pricing';
import BmiSection from '@/components/BmiSection';

const HomePage = () => {
	return (
		<Layout>
			<Header />
			<main>
				<Welcome />
				<Opinions />
				<Pricing />
				<BmiSection />
			</main>
		</Layout>
	);
};

export default HomePage;
