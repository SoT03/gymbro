import { useEffect, useState, useCallback, useRef } from 'react';
import OpinionCard from './OpinionCard';

const reviewsData = [
	{
		name: 'John Doe',
		avatar: '/static/img/opinions/man1.jpg',
		review:
			'This gym is amazing. Amazing facility, top equipment and great environment. Good service with friendly staff and super clean and comfortable gym for everyone from beginners to professional athletes to train at. I will definitely be returning on my next trip.',
		rate: 4.5,
	},
	{
		name: 'Bruce Wayne',
		avatar: '/static/img/opinions/man2.jpg',
		review:
			'My partner and I visited the gym after a recommendation from a friend. Great experience, gym has everything you need. It is also very very clean. They offer protein shakes and supplements too which is nice. 350 baht each was reasonable',
		rate: 4,
	},
	{
		name: 'Harvey Dent',
		avatar: '/static/img/opinions/man3.jpg',
		review:
			'Had a great gym session in here, has all the facilities/machines you could possibly want, and then some! Kind helpful and friendly staff, superb central location - price slightly more expensive for a day pass than other gyms but it is worth it for the equipment facilities. Will definitely be back!',
		rate: 5,
	},
	{
		name: 'Talia al Ghul',
		avatar: '/static/img/opinions/woman1.jpg',
		review:
			'Good staff, great personal trainers! You got all the stuff you need for a perfect workout, good shakes, tasty meals low on calories avaible every day. Just an awesome gym in many different ways! ',
		rate: 4.5,
	},
];

const Opinions = () => {
	const timerRef = useRef()
	const [currentReview, setCurrentReview] = useState(0);

	const nextReview = () => {
		const isLastSlide = currentReview === reviewsData.length - 1;
		const newIndex = isLastSlide ? 0 : currentReview + 1;
		setCurrentReview(newIndex);
	};

	useEffect(() => {
		timerRef.current = setTimeout(() => {
			nextReview();
		}, 5000);

		return () => clearTimeout(timerRef.current);
	});

	return (
		<section className='bg-zinc-900 text-white'>
			<div className='wrapper'>
				<div className='p-8'>
					<div className='text-center'>
						<p className='text-orange-300  uppercase text-xs '>
							our festimonials
						</p>
						<h2 className='text-3xl mb-4 font-bold'>What People Say</h2>
					</div>
					<hr className='border-orange-400 border-solid border-2 mb-6 lg:w-24' />
					<div className='flex overflow-hidden'>
						{reviewsData.map((review) => (
							<OpinionCard
								data={review}
								key={review.name}
								currentIndex={currentReview}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Opinions;
