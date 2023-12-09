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
		title: 'Saun',
		desc: 'Saun is a therapeutic, heated, enclosed, wood-lined room with many different options for benches, seating, design, and size/capacity. The intense heat generated within the sauna encourages detoxifying perspiration, relief from aches and pains, and deep relaxation after your session.',
	},
	{
		img: '/static/img/offers/relax.jpg',
		title: 'Relax Zone',
		desc: 'A place to relax before and after training is available for all Club members. At the reception of the Club you can also buy pre- and post-workout dietary supplements.',
	},
	{
		img: '/static/img/offers/dietician.jpg',
		title: 'Dietician',
		desc: 'We offer an individually tailored diet to the needs of the client. In the office we are working on a professional program for laying menus, which includes many recipes, which allows you to lay out a varied and tasty diet. In addition, the program works on the basis of the Food and Nutrition Institute, which confirms the authenticity of the data.',
	},

	{
		img: '/static/img/offers/trainer.jpg',
		title: 'Workout Programs',
		desc: 'Individually tailored training is the key to success. Therefore, all exercises are precisely selected to your needs, taking into account the training goal, level of advancement, predisposition of the musculoskeletal system. We offer: Weight Loose, Body Building and Fitness Classes Programs',
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
						<Offer key={offer.title} data={offer} />
					))}
				</div>
			</div>
		</Section>
	);
};

export default Offers;
