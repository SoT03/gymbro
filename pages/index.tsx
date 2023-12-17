import Header from '@/components/Header';
import Opinions from '@/components/Opinions';
import Welcome from '@/components/Welcome';
import Layout from '@/components/layout/Layout';
import Pricing from '@/components/Pricing';
import BmiSection from '@/components/BmiSection';
import PersonalTrainers from '@/components/PersonalTrainers';
import News from '@/components/News';

const HomePage = () => {
	return (
		<Layout>
			<Header />
			<main>
				<Welcome />
				<Opinions />
				<Pricing />
				<BmiSection />
				<PersonalTrainers />
				<News />
			</main>
		</Layout>
	);
};

export default HomePage;
