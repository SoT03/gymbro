import { useState } from 'react';
import Section from './util/Section/Section';

const videos = [
	'https://www.youtube.com/embed/gey73xiS8F4?si=6r2bzxu0FRjBx3Cz',
	'https://www.youtube.com/embed/uNN62f55EV0?si=JxekEK8Q30zbwmQV',
	'https://www.youtube.com/embed/R5nnr_j2uVk?si=RrnefEXYnKgoQBLR',
];

const thumbnails = [
	'/static/img/welcome/backguy.jpg',
	'/static/img/welcome/cbum.jpg',
	'/static/img/welcome/zyzz.jpg',
];

const Welcome = () => {
	const [currentVideo, setCurrentVideo] = useState(0);

	return (
		<section className='bg-zinc-800  text-white overflow-hidden xl:py-24'>
			<div className='wrapper'>
				<div className='lg:flex lg:p-6 lg:items-center'>
					<div className='p-8 md:p-12 lg:w-1/2'>
						<p className='text-orange-300  uppercase text-xs ml-2 -mb-1 md:ml-36 lg:ml-0'>
							About gymbro
						</p>
						<h2 className='uppercase text-3xl font-bold text-center mb-2 md:text-5xl md:mb-6 lg:text-left lg:normal-case '>
							Welcome to us
						</h2>
						<hr className='border-orange-400 border-solid border-2 mb-6 lg:w-24' />
						<h3 className='mb-3 md:text-xl md:mb-5'>
							Welcome to GymBro, where fitness meets community and
							transformation happens!
						</h3>
						<p className='text-sm md:text-base'>
							At GymBro, we are more than just a gym, we are a passionate and
							supportive fitness family dedicated to helping you achieve your
							health and wellness goals. Our mission is to create a positive and
							empowering environment that inspires you to challenge yourself,
							embrace a healthy lifestyle, and discover the best version of
							yourself.
						</p>
					</div>
					<div className='lg:w-1/2  lg:scale-75'>
						<iframe
							className='w-full aspect-video 
                            '
							src={videos[currentVideo]}
							title='YouTube video player'
							allowFullScreen></iframe>
						<div className='flex justify-around lg:gap-2 lg:mt-2'>
							{thumbnails.map((photo, index) => (
								<img
									fetchPriority='low'
									loading='lazy'
									src={photo}
									alt='some alt'
									key={photo}
									className={`w-1/3 border-4 cursor-pointer hover:scale-110 transition-transform duration-300  ${
										index === currentVideo ? 'border-orange-400' : ''
									}`}
									onClick={() => setCurrentVideo(index)}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
