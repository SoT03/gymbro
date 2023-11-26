import { useState } from 'react';

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
		<section className='bg-gray-700  text-white overflow-hidden'>
			<div className='wrapper'>
				<div>
					<div className='p-8 '>
						<p className='text-orange-300  uppercase text-xs ml-2 -mb-1'>
							About gymbro
						</p>
						<h2 className='uppercase text-3xl font-bold text-center mb-2'>
							Welcome to us
						</h2>
						<hr className='border-orange-400 border-solid border-2 mb-6' />
						<h3 className='mb-3'>
							Welcome to GymBro, where fitness meets community and
							transformation happens!
						</h3>
						<p className='text-sm'>
							At GymBro, we are more than just a gym, we are a passionate and
							supportive fitness family dedicated to helping you achieve your
							health and wellness goals. Our mission is to create a positive and
							empowering environment that inspires you to challenge yourself,
							embrace a healthy lifestyle, and discover the best version of
							yourself.
						</p>
					</div>
					<div>
						<iframe
							className='w-full 
                            '
							src={videos[currentVideo]}
							title='YouTube video player'
							allowFullScreen></iframe>
						<div className='flex justify-around '>
							{thumbnails.map((photo, index) => (
								<img
									src={photo}
									alt='some alt'
									key={photo}
									className={`w-1/3 border-2 cursor-pointer hover:scale-110 transition-transform duration-300  ${
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
