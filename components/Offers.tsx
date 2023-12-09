import Offer from './Offer';
import Section from './util/Section/Section';
import SectionHeading from './util/Section/SectionHeading';
import HR from './util/Section/SectionHr';
import SectionTitle from './util/Section/SectionTitle';

const offersList = [
	{
		img: '/static/img/offers/gym.jpg',
		title: 'Gym Zone',
		desc: 'It is equipped with equipment for all body parts. GymBro has top quality machines from companies such as Technogym, Matrix, Thorn and many other well-known brands. Training in this zone using free weights or freestanding machines will allow you to strengthen the body, build muscle mass, improve strength. The spatial strength zone is friendly for both women and men.',
	},
	{
		img: '/static/img/offers/fitness.jpg',
		title: 'Fitness Zone',
		desc: 'Air-conditioned fitness room, adapted for classes of various intensity, where all group classes are held under the supervision of a qualified instructor. The spacious hall is equipped with professional equipment such as steppes, fitness barbells, mats, dumbbells, rubber, balls and trampolines. We have created the best conditions for exercise and relaxation.',
	},
	{
		img: '/static/img/offers/sauna.jpg',
		title: 'Fitness Zone',
		desc: 'Air-conditioned fitness room, adapted for classes of various intensity, where all group classes are held under the supervision of a qualified instructor. The spacious hall is equipped with professional equipment such as steppes, fitness barbells, mats, dumbbells, rubber, balls and trampolines. We have created the best conditions for exercise and relaxation.',
	},
	{
		img: '/static/img/offers/relax.jpg',
		title: 'Fitness Zone',
		desc: 'Air-conditioned fitness room, adapted for classes of various intensity, where all group classes are held under the supervision of a qualified instructor. The spacious hall is equipped with professional equipment such as steppes, fitness barbells, mats, dumbbells, rubber, balls and trampolines. We have created the best conditions for exercise and relaxation.',
	},
	{
		img: '/static/img/offers/dietician.jpg',
		title: 'Fitness Zone',
		desc: 'Air-conditioned fitness room, adapted for classes of various intensity, where all group classes are held under the supervision of a qualified instructor. The spacious hall is equipped with professional equipment such as steppes, fitness barbells, mats, dumbbells, rubber, balls and trampolines. We have created the best conditions for exercise and relaxation.',
	},

	{
		img: '/static/img/offers/trainer.jpg',
		title: 'Fitness Zone',
		desc: 'Air-conditioned fitness room, adapted for classes of various intensity, where all group classes are held under the supervision of a qualified instructor. The spacious hall is equipped with professional equipment such as steppes, fitness barbells, mats, dumbbells, rubber, balls and trampolines. We have created the best conditions for exercise and relaxation.',
	},
];

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
					{offersList.map((offer) => (
						<Offer data={offer} />
					))}
				</div>
			</div>
		</Section>
	);
};

export default Offers;
