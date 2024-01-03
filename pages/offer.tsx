import Offer from '@/components/offer/Offer';
import { useWindowSize } from '@/hooks/useWindowWidth';

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
		desc: 'A place to relax before and after training is available for all Club members. At the reception of the Club you can also buy pre- and post-workout dietary supplements. Also you can do a lot of activities as playing billard or bowling.',
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

const OfferPage = () => {
	const size = useWindowSize();

	return (
		<>
			<header
				className='h-[50vh] relative bg-center flex flex-col items-center justify-center text-white px-12 text-center md:h-[40vh]'
				style={{
					backgroundImage: `url(/static/img/offers/dumbells_${
						size.width >= 768 ? 'big' : 'small'
					}.jpg)`,
				}}>
				<div className='bg-shadow'></div>
				<h1 className='z-10 uppercase font-semibold text-2xl mb-2'>
					Our Offer
				</h1>
				<p className='z-10  text-lg'>Here is all inforamations that you need</p>
			</header>
			<main>
				<section className='px-6 py-12 text-amber-300 bg-zinc-700 font-semibold'>
					<div>
						<h3 className='text-amber-500 text-center mb-6 text-4xl'>
							Join Us !
						</h3>
						<p>
							Our gym have a lot to offer and will comfort everybody needs. We
							invest 80% of our income into the gym into this gym. All this
							beacause this gym is our hobby we love it with all of our heart.
						</p>
					</div>
				</section>
				<section className=''>
					{offersList.map((offer, index) => (
						<Offer data={offer} key={offer.title} index={index} />
					))}
				</section>
			</main>
		</>
	);
};

export default OfferPage;
