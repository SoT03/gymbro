import Header from '@/components/Header';
import Opinions from '@/components/Opinions';
import Welcome from '@/components/Welcome';
import Layout from '@/components/layout/Layout';
import Pricing from '@/components/Pricing';
import BmiSection from '@/components/BmiSection';
import PersonalTrainers from '@/components/PersonalTrainers';
import News from '@/components/News';
import Hero from '@/components/Hero';

const HomePage = () => {
	return (
		<>
			<Header />
			<main>
				<Welcome />
				<Opinions />
				<Pricing />
				<Hero />
				<BmiSection />
				<PersonalTrainers />
				<News />
			</main>
		</>
	);
};

export default HomePage;
