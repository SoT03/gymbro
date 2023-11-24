import Image from 'next/image';

const Welcome = () => {
	return (
		<section className='bg-gray-700 text-white overflow-hidden'>
			<div className='wrapper'>
				<div>
					<div className='p-8 '>
						<p className='text-orange-300 uppercase text-xs ml-8 -mb-1'>
							About gymbro
						</p>
						<h2 className='uppercase text-2xl font-bold text-center mb-2'>
							Welcome to us
						</h2>
						<hr className='bg-orange-400' />
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
							soluta similique cum.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
							ratione assumenda consectetur deserunt laboriosam minima! Quae sed
							nostrum vel consequuntur libero atque!
						</p>
					</div>
					<div>
						<iframe
							src='https://www.youtube.com/embed/gey73xiS8F4?si=6r2bzxu0FRjBx3Cz'
							title='YouTube video player'
							allowFullScreen></iframe>
						<div>
							<img src='/static/img/header/togheter_small.jpg' alt='XDD' />
							<img src='/static/img/header/togheter_small.jpg' alt='XDD' />
							<img src='/static/img/header/togheter_small.jpg' alt='XDD' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
