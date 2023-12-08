import Image from 'next/image';

const Offer = () => {
	return (
		<div className='bg-zinc-800  relative flex flex-col'>
			<div className='relative '>
				<Image
					width={640}
					height={427}
					src='/static/img/offers/gym.jpg'
					alt='XD'
				/>
			</div>
			<div className='p-6'>
				<h2 className='mb-2'>Lorem, ipsum dolor.</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus
					non sequi ut distinctio cumque maxime placeat facilis minima? Maxime
					iure ab inventore consectetur velit nesciunt eum blanditiis?
				</p>
			</div>
		</div>
	);
};

export default Offer;
