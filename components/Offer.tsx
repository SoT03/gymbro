import OfferCard from './OfferCard';
import Section from './util/Section/Section';
import SectionHeading from './util/Section/SectionHeading';
import HR from './util/Section/SectionHr';
import SectionTitle from './util/Section/SectionTitle';

const Offer = () => {
	return (
		<Section classes={['bg-zinc-800']}>
			<div>
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
					See all of our offer <span>here</span>
				</p>
			</div>
		</Section>
	);
};

export default Offer;
