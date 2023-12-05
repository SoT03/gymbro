import Link from 'next/link';
import OfferCard from './OfferCard';
import Section from './util/Section/Section';
import SectionHeading from './util/Section/SectionHeading';
import HR from './util/Section/SectionHr';
import SectionTitle from './util/Section/SectionTitle';

const Offer = () => {
	return (
		<Section classes={['bg-zinc-800']}>
			<div className='relative p-6'>
				<div className='text-center'>
					<SectionHeading text='Pricing tables' />
					<SectionTitle title='Our Offer' />
				</div>
				<HR />
				<div>
					<OfferCard />
					<OfferCard />
					<OfferCard />
				</div>
				<p className='text-center'>
					See all of our offer{' '}
					<Link
						className='text-orange-400 font-bold uppercase underline underline-offset-2 hover:text-orange-600 transition-colors duration-300'
						href={''}>
						here
					</Link>
				</p>
			</div>
		</Section>
	);
};

export default Offer;
