import PricingCard from '@/components/PricingCard';
import Layout from '@/components/layout/Layout';
import PricingSection from '@/components/pricing/pricingSection';

let lol = {
	title: 'Fitness Care',
	price: { amount: 696, per: 'year' },
	options: [
		'24/7 gym entry',
		'Every gym zone available',
		'Personal trainer',
		'Group fitness workout',
		'Saun avaible',
		'Own locker',
	],
};

const PricingPage = () => {
	return (
		<Layout>
			<main className=' bg-zinc-800 py-12 '>
				<PricingSection title='GYM AREAS'>
					<PricingCard data={lol} />
					<PricingCard data={lol} />
					<PricingCard data={lol} />
				</PricingSection>
			</main>
		</Layout>
	);
};

export default PricingPage;
