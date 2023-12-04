import { useState } from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
import OpinionCard from './OpinionCard';
import { useWindowSize } from '@/hooks/useWindowWidth';

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
	const size = useWindowSize();
	const isLg =
		size.width > 1000
			? { index: -1, lenght: reviewsData.length - 3 }
			: { index: 0, lenght: reviewsData.length - 1 };

	const [currentReview, setCurrentReview] = useState(0);

	const nextReviewHandler = () => {
		setCurrentReview((prev) => prev + 1);
	};
	const prevReviewHandler = () => {
		setCurrentReview((prev) => prev - 1);
	};

	return (
		<section className='bg-zinc-900 text-white'>
			<div className='wrapper'>
				<div className='p-8 relative'>
					<div className='text-center'>
						<p className='text-orange-300  uppercase text-xs '>
							our festimonials
						</p>
						<h2 className='text-3xl mb-4 font-bold'>
							What People Say
						</h2>
					</div>
					<hr className='border-orange-400 border-solid border-2 mb-6 lg:w-1/12 lg:mx-auto' />
					<div className='flex overflow-hidden lg:justify-around lg:gap-6'>
						{reviewsData.map((review) => (
							<OpinionCard
								data={review}
								key={review.name}
								currentIndex={currentReview}
							/>
						))}
					</div>
					<div className='absolute flex gap-2 bottom-4 text-white z-10 left-1/2 -translate-x-1/2 md:bottom-4 lg:bottom-1/3 lg:-translate-y-full lg:w-11/12 lg:justify-between'>
						<button
							className='bg-slate-200 rounded-full cursor-pointer hover:bg-orange-400 transition-colors duration-300'
							disabled={currentReview > isLg.index ? false : true}>
							<IconChevronLeft
								className='h-8 w-8 text-black'
								onClick={prevReviewHandler}
							/>
						</button>
						<button
							className='bg-slate-200 rounded-full cursor-pointer hover:bg-orange-400 transition-colors duration-300'
							disabled={currentReview < isLg.lenght ? false : true}>
							<IconChevronRight
								className='h-8 w-8  text-black'
								onClick={nextReviewHandler}
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Opinions;
