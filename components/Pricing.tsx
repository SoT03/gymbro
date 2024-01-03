import Link from 'next/link';
import PricingCard from './PricingCard';
import Section from './util/Section/Section';
import SectionHeading from './util/Section/SectionHeading';
import HR from './util/Section/SectionHr';
import SectionTitle from './util/Section/SectionTitle';

const memberships = [
	{
		title: 'Open Gym',
		price: { amount: 50, per: 'month' },
		options: ['24/7 gym entry', 'Every gym zone available', 'Saun avaible'],
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
	},
];

const Pricing = () => {
	return (
		<Section id='pricing' classes={['bg-zinc-800']}>
			<div className='relative py-6 px-8'>
				<div className='text-center'>
					<SectionHeading text='Pricing tables' />
					<SectionTitle title='Gym Membership' />
				</div>
				<HR />
				<div className='flex flex-col justify-center md:flex-row md:flex-wrap'>
					{memberships.map((membership, index) => (
						<PricingCard
							data={membership}
							key={membership.title}
							index={index}
						/>
					))}
				</div>
				<p className='text-center '>
					See all of our prices{' '}
					<Link
						className='px-1 relative z-10  text-orange-400 font-bold uppercase before:left-0 before:bottom-0 before:bg-orange-400 transition-colors duration-300 before:w-full before:transition-height before:duration-300 before:h-px  before:absolute before:-z-10  before:content-[""]   hover:text-white hover:before:h-full'
						href='/pricing'>
						here
					</Link>
				</p>
			</div>
		</Section>
	);
};

export default Pricing;
