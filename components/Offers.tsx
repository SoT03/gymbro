import Offer from './Offer';
import Section from './util/Section/Section';
import SectionHeading from './util/Section/SectionHeading';
import HR from './util/Section/SectionHr';
import SectionTitle from './util/Section/SectionTitle';

const Offers = () => {
	return (
		<Section classes={['bg-zinc-900']}>
			<div className='relative py-6 px-8 text-center'>
				<div>
					<SectionHeading text='Our offer' />
					<SectionTitle title='Everything You Need' />
					<HR />
				</div>
				<div>
					<Offer />
				</div>
			</div>
		</Section>
	);
};

export default Offers;
