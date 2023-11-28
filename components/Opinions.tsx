import Image from 'next/image';

const Opinions = () => {
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
					<div>
						<div className='bg-zinc-800  p-6  rounded-sm'>
							<div className='flex flex-row justify-between items-center'>
								<p className='font-bold text-xl'>John Doe</p>
								<Image
									className='rounded-lg w-14 h-12'
									width={128}
									height={128}
									src='/static/img/opinions/man1.jpg'
									alt='XD'
								/>
							</div>
							<div className='mt-4'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consequuntur iste ipsa blanditiis delectus sit, beatae culpa
									architecto? Delectus sint dolorem suscipit eos!
								</p>
								<span>⭐⭐⭐⭐</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Opinions;
