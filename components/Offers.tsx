import Offer from './Offer';
import Section from './util/Section/Section';

const Offers = () => {
	return (
		<Section classes={['bg-zinc-900']}>
			<div className='relative py-6 px-8'>
				<Offer />
			</div>
		</Section>
	);
};

export default Offers;
