import Link from 'next/link';
import OfferCard from './PricingCard';
import Section from './util/Section/Section';
import SectionHeading from './util/Section/SectionHeading';
import HR from './util/Section/SectionHr';
import SectionTitle from './util/Section/SectionTitle';

const memberships = [
	{
		title: 'Open Gym',
		price: { amount: 30, per: 'month' },
	},
];

const Pricing = () => {
	return (
		<Section classes={['bg-zinc-800']}>
			<div className='relative p-6'>
				<div className='text-center'>
					<SectionHeading text='Pricing tables' />
					<SectionTitle title='Gym Membership' />
				</div>
				<HR />
				<div>
					<OfferCard />
					<OfferCard />
					<OfferCard />
				</div>
				<p className='text-center '>
					See all of our offer{' '}
					<Link
						className='px-1 relative z-10  text-orange-400 font-bold uppercase before:left-0 before:bottom-0 before:bg-orange-400 transition-colors duration-300 before:w-full before:transition-height before:duration-300 before:h-px  before:absolute before:-z-10  before:content-[""]   hover:text-white hover:before:h-full'
						href={''}>
						here
					</Link>
				</p>
			</div>
		</Section>
	);
};

export default Pricing;
