import PricingCard from '@/components/PricingCard';
import Layout from '@/components/layout/Layout';
import PricingSection from '@/components/pricing/PricingSection';

const gymAreasArray = [
	{
		title: 'One Day',
		price: { amount: 8, per: 'Day' },
		options: ['One day entry', 'Every gym zone available'],
	},
	{
		title: 'Veteran Open Gym',
		price: { amount: 480, per: 'year' },
		options: [
			'24/7 gym entry',
			'Every gym zone available',
			'Only 40$ per month',
			'Saun avaible',
			'Own locker',
			'Member t-shirt',
		],
	},
	{
		title: 'Month Subscription',
		price: { amount: 50, per: 'Month' },
		options: ['One day entry', 'Every gym zone available', 'Saun avaible'],
	},
];

const bodyBuildingArray = [
	{
		title: 'Diet + Plan',
		price: { amount: 40, per: '3 Months' },
		options: ['3 Month Plan', 'Workout plan and diet'],
	},
	{
		title: 'Full Care',
		price: { amount: 210, per: '3 Months' },
		options: [
			'3 Month Plan',
			'Workout plan and diet',
			'Meals recipies',
			'Physiotherapist care',
			'Personal Trainer',
			'All Gym zones avaible',
			'Saun avaible',
		],
	},
	{
		title: 'Fittness Groups',
		price: { amount: 40, per: 'Month' },
		options: [
			'24/7 gym entry',
			'Every gym zone available',
			'Personal trainer',
			'Group fitness workout',
			'Saun avaible',
			'Own locker',
		],
	},
];

const PricingPage = () => {
	return (
		<main className=' bg-zinc-800 py-12 '>
			<PricingSection title='GYM AREAS'>
				{gymAreasArray.map((item, index) => (
					<PricingCard data={item} index={index} key={index} />
				))}
			</PricingSection>
			<PricingSection title='Work with Proffesionalist'>
				{bodyBuildingArray.map((item, index) => (
					<PricingCard data={item} index={index} key={index} />
				))}
			</PricingSection>
		</main>
	);
};

export default PricingPage;
